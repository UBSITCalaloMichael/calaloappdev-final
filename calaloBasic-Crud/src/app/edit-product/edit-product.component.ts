import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../product';
import { PRODUCTS } from '../product-listings';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input()product?:Product;

  selectedProduct?: Product; 
  

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

  goBack(): void{
    this.location.back();
  }

  save(): void{
    if(this.product){
      this.productService.updateProduct(this.product)
      .subscribe(()=>this.goBack());
    }
  }
  

}
