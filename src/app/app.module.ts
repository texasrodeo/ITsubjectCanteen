import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { WorkerloginComponent } from './templates/workerlogin/workerlogin.component';
import { RegisterComponent } from './templates/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { WorkerPageComponent } from './templates/worker-page/worker-page.component';
import { ProfileComponent } from './templates/profile/profile.component';
import { AccountantpageComponent } from './templates/accountantpage/accountantpage.component';
import { CookerpageComponent } from './templates/cookerpage/cookerpage.component';
import { CashierpageComponent } from './templates/cashierpage/cashierpage.component';
import { ProductsComponent } from './templates/products/products.component';
import { AddproductComponent } from './templates/addproduct/addproduct.component';
import {ForbiddenComponent} from "./templates/forbidden/forbidden.component";
import { ProvidersComponent } from './templates/providers/providers.component';
import { AddproviderComponent } from './templates/addprovider/addprovider.component';
import { AdddelieveryComponent } from './templates/adddelievery/adddelievery.component';
import { DelieversComponent } from './templates/delievers/delievers.component';
import { DishesComponent } from './templates/dishes/dishes.component';
import { AdddishComponent } from './templates/adddish/adddish.component';
import { EditdishComponent } from './templates/editdish/editdish.component';
import { MenusComponent } from './templates/menus/menus.component';
import { AddmenuComponent } from './templates/addmenu/addmenu.component';
import { ClientmenuComponent } from './templates/clientmenu/clientmenu.component';
import { MenuComponent } from './templates/menu/menu.component';
import { BagComponent } from './templates/bag/bag.component';
import { CreateOrderComponent } from './templates/create-order/create-order.component';
import { OrdersComponent } from './templates/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WorkerloginComponent,
    RegisterComponent,
    WorkerPageComponent,
    ProfileComponent,
    AccountantpageComponent,
    CookerpageComponent,
    CashierpageComponent,
    ProductsComponent,
    AddproductComponent,
    ForbiddenComponent,
    ProvidersComponent,
    AddproviderComponent,
    AdddelieveryComponent,
    DelieversComponent,
    DishesComponent,
    AdddishComponent,
    EditdishComponent,
    MenusComponent,
    AddmenuComponent,
    ClientmenuComponent,
    MenuComponent,
    BagComponent,
    CreateOrderComponent,
    OrdersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
