import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Webcomponent/login/login.component';
import { SignupComponent } from './Webcomponent/signup/signup.component';
import { CartComponent } from './Webcomponent/cart/cart.component';
import { OwnerLoginComponent } from './Webcomponent/owner-login/owner-login.component';
import { OwnerSignupComponent } from './Webcomponent/owner-signup/owner-signup.component';
import { HomePageComponent } from './Webcomponent/home-page/home-page.component';
import { ProductUploadComponent } from './Webcomponent/product-upload/product-upload.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"login", component:LoginComponent },
  {path:"signup", component:SignupComponent  },
  {path:"cart", component: CartComponent},
  {path:"owner-login", component:OwnerLoginComponent },
  {path:"owner-signup", component: OwnerSignupComponent},
  {path:"product-upload", component: ProductUploadComponent},
  {path: "cart", component:CartComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
