import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardProductsComponent } from './list-card-products.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFormProductsComponent } from '../add-form-products/add-form-products.component';



@NgModule({
  providers:[
  ],
  imports: [
    CommonModule, IonicModule,ReactiveFormsModule
  ],
  declarations: [ListCardProductsComponent,AddFormProductsComponent
  ],
  exports: [ListCardProductsComponent]
})
export class ListCardProductsModule { }
