import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product-listings';
import { MessageService } from './message.service';
import { Observable, observable,of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';
  httpOptions= {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  //view list components
  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS);

    //return products;
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(_=> this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts',[]))
    )
  }

  //view details components
  getProduct(id: number): Observable<Product>{
    //const product=PRODUCTS.find(i => i.id === id)!;
    const url = `${this.productsUrl}/${id}`;
    //return of(product);
    return this.http.get<Product>(url)
    .pipe(
      tap(_=> this.log(`fetched product id = ${id}`)),
      catchError(this.handleError<Product>(`getProduct id =${id}`))
    );
  }

  //update user details
  updateProduct(product:Product): Observable<any>{
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => this.log(`updated product id = ${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  //POST new product to the server
  addProduct(email: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl,email,this.httpOptions).pipe(
      tap((newProduct: Product)=> this.log(`added product w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  //Delete item from server
  deleteProduct(id: number): Observable<Product>{
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_=>this.log(`deleted product id =${id}`)),
      catchError(this.handleError<Product>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error:any):Observable<T> => {
      console.error(error);
      this.log(`$(operation} failed):${error.message}`)

    return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`ProductService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
