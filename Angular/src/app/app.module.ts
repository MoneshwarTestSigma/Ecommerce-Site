import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Webcomponent/login/login.component';
import { SignupComponent } from './Webcomponent/signup/signup.component';
import { CartComponent } from './Webcomponent/cart/cart.component';
import { HomePageComponent } from './Webcomponent/home-page/home-page.component';
import { OwnerLoginComponent } from './Webcomponent/owner-login/owner-login.component';
import { OwnerSignupComponent } from './Webcomponent/owner-signup/owner-signup.component';
import { ProductUploadComponent } from './Webcomponent/product-upload/product-upload.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HomePageComponent,
    OwnerLoginComponent,
    OwnerSignupComponent,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
