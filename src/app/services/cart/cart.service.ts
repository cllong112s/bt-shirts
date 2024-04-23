import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {CatalogItem} from "../../models/catalog-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCartSubject: Subject<CatalogItem[]> = new Subject<CatalogItem[]>();
  private itemsInCart: CatalogItem[] = [];

  constructor() { }

  getItemsInCart(): Observable<CatalogItem[]> {
    return this.itemsInCartSubject.asObservable(); // Simulating fetching data
  }

  addItemToCart(item: CatalogItem) {
    this.itemsInCart.push(item);
    this.itemsInCartSubject.next(this.itemsInCart);
  }
}
