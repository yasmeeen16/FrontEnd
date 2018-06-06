import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Form*/
import {FormsModule} from '@angular/forms';


/*services*/
import {DataServicesService} from './services/data-services.service';
import {HttpModule} from '@angular/http';


import { AppComponent } from './Component/root/app.component';
import { FilterPipe } from './Component/root/filter.pipe';
import { LoginComponent } from './Component/login/login/login.component';
import { LoginuserComponent } from './Component/login/loginuser/loginuser.component';
import { RegisterComponent } from './Component/register/register/register.component';
import { RegisteruserComponent } from './Component/register/registeruser/registeruser.component';
import { RegisterstoreComponent } from './Component/register/registerstore/registerstore.component';
import { AllcoffeeComponent } from './Component/category/coffee/allcoffee/allcoffee.component';
import { OnecoffeeComponent } from './Component/category/coffee/onecoffee/onecoffee.component';
import { AllrestaurantComponent } from './Component/category/restaurant/allrestaurant/allrestaurant.component';
import { OnerestaurantComponent } from './Component/category/restaurant/onerestaurant/onerestaurant.component';
import { AllstoreComponent } from './Component/category/store/allstore/allstore.component';
import { OnestoreComponent } from './Component/category/store/onestore/onestore.component';
import { LoginstoreComponent } from './Component/login/loginstore/loginstore.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    LoginuserComponent,
    RegisterComponent,
    RegisteruserComponent,
    RegisterstoreComponent,
    AllcoffeeComponent,
    OnecoffeeComponent,
    AllrestaurantComponent,
    OnerestaurantComponent,
    AllstoreComponent,
    OnestoreComponent,
    LoginstoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
