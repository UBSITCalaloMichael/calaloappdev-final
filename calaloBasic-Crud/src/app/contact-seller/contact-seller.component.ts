import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { PRODUCTS } from '../product-listings';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct?: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedProduct = PRODUCTS.find(selectedProduct => selectedProduct.id === id);
  }

}
