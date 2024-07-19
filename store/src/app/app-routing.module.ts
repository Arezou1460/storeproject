import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


const routes: Routes = [
  { path: "" , component: MainComponent },
  { path: "home", component: HomeComponent },
  { path: "login" , component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "contact" , component: ContactComponent },
  { path: "search/:searchTerm" , component: MainComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "cart-page", component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
