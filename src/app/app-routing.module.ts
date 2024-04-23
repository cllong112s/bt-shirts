import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {CatalogPageComponent} from "./components/catalog-page/catalog-page.component";
import {DonatePageComponent} from "./components/donate-page/donate-page.component";
import {CheckoutPageComponent} from "./components/checkout-page/checkout-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'donate', component: DonatePageComponent },
  { path: 'checkout', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
