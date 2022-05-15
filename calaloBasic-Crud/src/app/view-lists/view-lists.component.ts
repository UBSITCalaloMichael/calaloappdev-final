import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product-listings';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  products: Product[]=[];
  
  selectProduct?: Product;
 /*    onSelect(product: Product): void{
    this.selectProduct = product;
    } */

  constructor(
    //provider to access url parameter
    private route:ActivatedRoute,
    //productService
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    /* this.products = PRODUCTS; */
    //call getProducts
    this.getProducts();
  }
  getProducts(): void{
    this.productService.getProducts().
    subscribe(products => this.products = products);
  
  }

  add(email:string):void{
    email=email.trim();
    if(!email){return;}
    this.productService.addProduct({email} as Product)
    .subscribe(product => {
      this.products.push(product);
    });
  }

  delete(product:Product): void{
    this.confirmDelete();
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product.id)
    .subscribe();
  }

  confirmDelete(){
    alert('Are you sure you want to delete this account?');
  }
}
