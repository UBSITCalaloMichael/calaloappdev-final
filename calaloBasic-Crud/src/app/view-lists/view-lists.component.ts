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
    onSelect(product: Product): void{
    this.selectProduct = product;
    }

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

}
