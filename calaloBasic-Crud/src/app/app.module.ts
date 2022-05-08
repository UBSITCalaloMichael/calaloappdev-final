import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewProductsComponent,
    MyProductsComponent,
    ViewDetailsComponent,
    ViewListsComponent,
    ContactSellerComponent,
    CreateNewComponent,
    EditProductComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
