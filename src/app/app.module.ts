import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule, NgModelGroup } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PendingChangesGuard } from './pending-changes.guard';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundPageComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PendingChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
