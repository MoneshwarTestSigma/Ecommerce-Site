import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Webcomponent/login/login.component';
import { SignupComponent } from './Webcomponent/signup/signup.component';
import { CartComponent } from './Webcomponent/cart/cart.component';
import { HomePageComponent } from './Webcomponent/home-page/home-page.component';
import { MobilesComponent } from './Webcomponent/product-components/mobiles/mobiles.component';
import { LaptopsComponent } from './Webcomponent/product-components/laptops/laptops.component';
import { BagsComponent } from './Webcomponent/product-components/bags/bags.component';
import { DecoratorsComponent } from './Webcomponent/product-components/decorators/decorators.component';
import { OwnerLoginComponent } from './Webcomponent/owner-login/owner-login.component';
import { OwnerSignupComponent } from './Webcomponent/owner-signup/owner-signup.component';
import { ProductUploadComponent } from './Webcomponent/product-upload/product-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HomePageComponent,
    MobilesComponent,
    LaptopsComponent,
    BagsComponent,
    DecoratorsComponent,
    OwnerLoginComponent,
    OwnerSignupComponent,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
