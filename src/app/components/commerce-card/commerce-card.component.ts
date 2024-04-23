import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CartService} from "../../services/cart/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commerce-card',
  templateUrl: './commerce-card.component.html',
  styleUrls: ['./commerce-card.component.scss']
})
export class CommerceCardComponent {
  public quantity: string = '1';
  public currentColorSelection: string = '';
  public currentSizeSelection: string = '';

  constructor(private dialogRef: MatDialogRef<CommerceCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private cartService: CartService, private router: Router) {}

  closeDialog() {
    this.dialogRef.close();
  }

  selectColor(colorSelected: string) {
    if (colorSelected !== this.currentColorSelection) {
      document.getElementById(this.currentColorSelection)?.style.setProperty('border', 'black solid 1px');
      document.getElementById(colorSelected)?.style.setProperty('border', 'black solid 3px');
      this.currentColorSelection = colorSelected;
    }
  }

  selectSize(selectedSize: string) {
    if (selectedSize !== this.currentSizeSelection) {
      console.log(selectedSize)
      document.getElementById(this.currentSizeSelection)?.style.setProperty('border', 'black solid 1px');

      document.getElementById(selectedSize)?.style.setProperty('border', 'black solid 3px');
      this.currentSizeSelection = selectedSize;
    }
  }

  checkout() {
    for (let i = 0; i < parseInt(this.quantity); i++) {
      this.cartService.addItemToCart(this.data.item);
    }
    this.closeDialog();
    this.router.navigateByUrl('/checkout')
  }

  addToCart() {
    for (let i = 0; i < parseInt(this.quantity); i++) {
      this.cartService.addItemToCart(this.data.item);
    }
    this.closeDialog();
  }
}
