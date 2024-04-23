import {Component, HostListener, OnInit} from '@angular/core';
import {NavButton} from "../../models/nav-button";
import {NavigationEnd, Router} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";
import {CatalogItem} from "../../models/catalog-item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navButtons: NavButton[] = [
    new NavButton('Home', ''),
    new NavButton('About', '/about'),
    new NavButton('Catalog', '/catalog'),
    new NavButton('Donate', '/donate'),
  ];
  public numberOfItemsInCart: number = 0;
  public showMenu: boolean = false;
  clickCount: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navButtons.forEach((button: NavButton) => {
          if (button.routerLink === '' && event.url === '/') {
            button.selected = true;
          } else if (button.routerLink === event.url) {
            button.selected = true;
          } else {
            button.selected = false;
          }
        })
      }
    })

    this.cartService.getItemsInCart().subscribe((itemsInCart: CatalogItem[]) => {
      this.numberOfItemsInCart = itemsInCart.length;
    })
  }

  routeToHome() {
    this.router.navigateByUrl('');
  }

  goToCheckout() {
    this.router.navigateByUrl('/checkout')
  }

  openOrCloseMenu() {
    this.showMenu = !this.showMenu;
    this.clickCount = 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.clickCount += 1;

    if (this.showMenu && this.clickCount > 1) {
      this.showMenu = false;
      this.clickCount = 0;
    }
  }
}
