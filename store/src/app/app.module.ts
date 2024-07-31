import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './pages/main/navbar/navbar.component';
import { SearchComponent } from './pages/main/navbar/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './pages/title/title.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DateService } from './services/date.service';
import { CarouselDirective } from './carousel.directive';
import { TagsComponent } from './pages/tags/tags.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    SearchComponent,
    RegisterComponent,
    HomeComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    CarouselDirective,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [ DateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
