import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'ViewListsComponent', pathMatch: 'full'},
  {path:'viewlists', component: ViewListsComponent},
  {path: 'contactseller/:id', component: ContactSellerComponent},
  {path: 'editproduct/:id', component: EditProductComponent},
  {path: 'viewdetails/:id', component: ViewDetailsComponent},
  {path: 'myproducts', component: MyProductsComponent},
  {path: 'createproducts', component: CreateNewComponent},
  {path: 'newproducts', component: NewProductsComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
