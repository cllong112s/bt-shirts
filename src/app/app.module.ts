import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { DonatePageComponent } from './components/donate-page/donate-page.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { CommerceCardComponent } from './components/commerce-card/commerce-card.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    HomePageComponent,
    CatalogPageComponent,
    DonatePageComponent,
    CatalogComponent,
    CommerceCardComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
