import { Component } from '@angular/core';
import {CatalogItem} from "../../models/catalog-item";
import {MatDialog} from "@angular/material/dialog";
import {CommerceCardComponent} from "../commerce-card/commerce-card.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  catalogItems: CatalogItem[] = [
    new CatalogItem('Lolly', '15.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Bugzy', '21.99', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Kod', '16.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4284f5']),
    new CatalogItem('Muffins', '12.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Molly', '16.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5'], '12.95'),
    new CatalogItem('Soap', '20.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Goat', '20.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Mack', '12.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5'], '9.99'),
    new CatalogItem('Piper', '15.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Doc', '15.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Ike', '18.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Bent', '16.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5'], '10.95'),
    new CatalogItem('Prism', '15.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Buddy', '13.99', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
    new CatalogItem('Lucky', '11.95', ['#e3b366', '#1f241f', '#a34951', '#428257', '#4287f5']),
  ];

  constructor(public dialog: MatDialog) {}

  openCommerceCard(item: CatalogItem): void {
    const dialogRef = this.dialog.open(CommerceCardComponent, {
      width: '680px',
      data: { item: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
