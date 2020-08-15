import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtakaComponent } from './ataka/ataka.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'products', component: ProductComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'login', component: AtakaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
