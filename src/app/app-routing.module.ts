import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PendingChangesGuard } from './pending-changes.guard';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent,canDeactivate: [PendingChangesGuard]  },
  { path: 'cart', component: CartComponent },
  // { path: 'products', component: ProductsComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
