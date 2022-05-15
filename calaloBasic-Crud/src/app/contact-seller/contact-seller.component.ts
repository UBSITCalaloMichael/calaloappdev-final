import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { PRODUCTS } from '../product-listings';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {

  /* products = PRODUCTS; */
  @Input()product?:Product;

  /* selectedProduct?: Product; */

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    /* const id = this.route.snapshot.paramMap.get('id');
    this.selectedProduct = PRODUCTS.find(selectedProduct => selectedProduct.id === id); */
    this.getProduct();
  }

  getProduct(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
    .subscribe(product => this.product=product);
  }

}
