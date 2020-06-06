import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dishinorder} from "../models/dishinorder";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const _url = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  private productsUrl;
  private addproductUrl;
  private providersUrl;
  private addProviderUrl;
  private AllproductsUrl;
  private AllprovidersUrl;
  private deliversUrl;
  private addDeliverUrl;
  private dishesUrl;
  private AlldishesUrl;
  private addDishUrl;
  private getDishUrl;
  private deleteDishUrl;
  private menusUrl;
  private deleteMenuUrl;
  private addMenuUrl;
  private getMenu;
  private addOrderUrl: string;
  private ordersUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = _url + "products/products";
    this.AllproductsUrl = _url + "products/Allproducts";
    this.addproductUrl = _url + "products/addProduct";
    this.AllprovidersUrl = _url + "providers/Allproviders"
    this.providersUrl = _url + "providers";
    this.addProviderUrl = _url + "providers/addProvider";
    this.addDeliverUrl = _url + "deliveries/addDelivery";
    this.deliversUrl = _url + "deliveries";
    this.dishesUrl = _url + "dishes";
    this.AlldishesUrl = _url + "dishes/findAll";
    this.addDishUrl = _url + "dishes/addDish";
    this.getDishUrl = _url + "dishes/getDish";
    this.deleteDishUrl = _url + "dishes/deleteDish";
    this.deleteMenuUrl = _url + "menus/deleteMenu";
    this.menusUrl = _url + "menus";
    this.addMenuUrl = _url + "menus/addMenu";
    this.getMenu = _url + "menus/getMenu";
    this.addOrderUrl = _url + "orders/addOrder";
    this.ordersUrl =_url +"orders";
  }

  public findProducts(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.productsUrl, {params});
  }

  public findProviders(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.providersUrl, {params});
  }

  addProduct(form: any): Observable<any>  {
    return this.http.post(this.addproductUrl, {
      price: form.price,
      name: form.name,
    }, httpOptions);
  }

  addProvider(form: any): Observable<any>  {
    return this.http.post(this.addProviderUrl, {
      name: form.name,
      phone: form.Phone
    }, httpOptions);
  }

  findAllProducts(): Observable<any> {
    return this.http.get<any>(this.AllproductsUrl);
  }

  findAllProviders(): Observable<any> {
    return this.http.get<any>(this.AllprovidersUrl);
  }

  // addDelivery(form: any): Observable<any> {
  //   return this.http.post(this.addDeliverUrl, {
  //     product: form.selectedProduct,
  //     provider: form.selectedProvider,
  //     quantity: form.quantity,
  //   }, httpOptions);
  // }

  findActiveDelievers(page: number, size: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.deliversUrl+"/active", {params});
  }

  findConfirmedDelievers(page: number, size: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.deliversUrl+"/confirmed", {params});
  }

  addDelivery(selectedProduct: any, selectedProvider: any, quantity: any, sum: any, id:any): Observable<any> {
    return this.http.post(this.addDeliverUrl, {
          productId: selectedProduct,
          providerId: selectedProvider,
          quantity: quantity,
          sum: sum,
          userId: id
        }, httpOptions);
  }

  confirmDelivery(id: any):Observable<any> {

    const params = new HttpParams()
      .set('id', id.toString())
    return this.http.get<any>(this.deliversUrl+"/confirm", {params});

  }

  findDishes(page: number, size: number):Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.dishesUrl, {params});
  }

  addDish(form: any, listIngredients: any):Observable<any> {
    return this.http.post(this.addDishUrl, {
      price: form.price,
      name: form.name,
      recipe: form.recipe,
      ingredients: listIngredients
    }, httpOptions);
  }

  findDish(id: any):Observable<any> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.get<any>(this.getDishUrl, {params});
  }

  deleteDish(id: any) {
    const params = new HttpParams()
      .set('id', id)
    return this.http.get<any>(this.deleteDishUrl, {params});
  }

  findMenus(page: number, size: number):Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.menusUrl, {params});
  }

  deleteMenu(id: any) {
    const params = new HttpParams()
      .set('id', id)
    return this.http.get<any>(this.deleteMenuUrl, {params});
  }

  findAllDishes(): Observable<any> {
    return this.http.get<any>(this.AlldishesUrl);
  }

  addMenu(form: any, listDishes: any[]):Observable<any> {
    return this.http.post(this.addMenuUrl, {
      name: form.name,
      dishes: listDishes
    }, httpOptions);
  }

  findMenu(id: any): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.get<any>(this.getMenu, {params});
  }

  sendOrder(form: any, items: Dishinorder[], sum:any):Observable<any> {
    console.log(form);
    console.log(items);
    return this.http.post(this.addOrderUrl, {
      name: form.name,
      phone: form.number,
      price: sum,
      dishes: items
    }, httpOptions);
  }

  findActiveOrders(page: number, size: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.ordersUrl+"/active", {params});
  }

  findConfirmedOrders(page: number, size: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(this.ordersUrl+"/confirmed", {params});
  }
}
