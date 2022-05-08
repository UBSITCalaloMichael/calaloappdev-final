import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../product';
import { PRODUCTS } from '../product-listings';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

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
