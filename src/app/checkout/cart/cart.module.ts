import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LineItemListComponent } from './components/line-item-list/line-item-list.component';
import { LineItemComponent } from './components/line-item-list/line-item/line-item.component';

@NgModule({
  declarations: [
    CartComponent,
    LineItemListComponent,
    LineItemComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class CartModule { }