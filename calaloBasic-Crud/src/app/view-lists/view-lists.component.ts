import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product-listings';

@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  products: Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS;
  }

}
