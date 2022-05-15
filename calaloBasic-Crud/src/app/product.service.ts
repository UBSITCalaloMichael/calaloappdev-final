import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product-listings';
import { Observable, observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //view list components
  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS);

    return products;
  }

  //view details components
  getProduct(id: number): Observable<Product>{
    const product=PRODUCTS.find(i => i.id === id)!;
    return of(product);
  }

  constructor() { }
}
