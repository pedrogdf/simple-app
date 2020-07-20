import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabProductPage } from './tab-products.page';

import { TabProductPageRoutingModule } from './tab-products-routing.module';
import { ListCardProductsModule } from 'src/app/components/products/list-card-products/list-card-products.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListCardProductsModule,
    TabProductPageRoutingModule
  ],
  declarations: [TabProductPage]
})
export class TabProductPageModule {}
