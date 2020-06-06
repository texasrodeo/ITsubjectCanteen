import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./templates/login/login.component";
import {HomeComponent} from "./templates/home/home.component";
import {WorkerloginComponent} from "./templates/workerlogin/workerlogin.component";
import {WorkerPageComponent} from "./templates/worker-page/worker-page.component";
import {AccountantpageComponent} from "./templates/accountantpage/accountantpage.component";
import {ProfileComponent} from "./templates/profile/profile.component";
import {CashierpageComponent} from "./templates/cashierpage/cashierpage.component";
import {CookerpageComponent} from "./templates/cookerpage/cookerpage.component";
import {ProductsComponent} from "./templates/products/products.component";
import {AddproductComponent} from "./templates/addproduct/addproduct.component";
import {AddproviderComponent} from "./templates/addprovider/addprovider.component";
import {ProvidersComponent} from "./templates/providers/providers.component";
import {AdddelieveryComponent} from "./templates/adddelievery/adddelievery.component";
import {DelieversComponent} from "./templates/delievers/delievers.component";
import {DishesComponent} from "./templates/dishes/dishes.component";
import {AdddishComponent} from "./templates/adddish/adddish.component";
import {EditdishComponent} from "./templates/editdish/editdish.component";
import {AddmenuComponent} from "./templates/addmenu/addmenu.component";
import {MenusComponent} from "./templates/menus/menus.component";
import {ClientmenuComponent} from "./templates/clientmenu/clientmenu.component";
import {MenuComponent} from "./templates/menu/menu.component";
import {BagComponent} from "./templates/bag/bag.component";
import {CreateOrderComponent} from "./templates/create-order/create-order.component";
import {OrdersComponent} from "./templates/orders/orders.component";


const routes: Routes = [
  {path: '', component: HomeComponent},

  { path: 'login', component: LoginComponent },

  { path: 'workerRegister', component:  WorkerloginComponent},
  { path: 'workerPage', component:  WorkerPageComponent},
  { path: 'menu', component: ClientmenuComponent },
  { path: 'bag', component: BagComponent },
  { path: 'createOrder', component: CreateOrderComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'accountant', component:  AccountantpageComponent},
  { path: 'accountant/products', component:  ProductsComponent},
  { path: 'cooker/products', component:  ProductsComponent},
  { path: 'cooker/dishes', component:  DishesComponent},
  { path: 'cooker/menus', component:  MenusComponent},
  { path: 'cooker/menus/addMenu', component:  AddmenuComponent},
  { path: 'cooker/dishes/addDish', component:  AdddishComponent},
  { path: 'cooker/dishes/editDish/:id', component:  EditdishComponent},
  { path: 'accountant/providers', component:  ProvidersComponent},
  { path: 'accountant/deliveries/:status', component:  DelieversComponent},
  { path: 'accountant/addDelivery', component:  AdddelieveryComponent},
  { path: 'accountant/products/addProduct', component:  AddproductComponent},
  { path: 'accountant/providers/addProvider', component:  AddproviderComponent},
  { path: 'cashier', component:  CashierpageComponent},
  { path: 'cashier/orders/:status', component:  OrdersComponent},
  { path: 'cooker', component:  CookerpageComponent},
  { path: 'profile', component:  ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
