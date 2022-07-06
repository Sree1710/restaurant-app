import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SearchrestaurantComponent } from './searchrestaurant/searchrestaurant.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SearchrestaurantComponent,
    ViewfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
