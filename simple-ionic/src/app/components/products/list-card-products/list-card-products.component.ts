import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products/products.service';
import { Product } from 'src/app/model/product';
import { ModalController } from '@ionic/angular';
import { AddFormProductsComponent } from '../add-form-products/add-form-products.component';

@Component({
  selector: 'app-list-card-products',
  templateUrl: './list-card-products.component.html',
  styleUrls: ['./list-card-products.component.scss'],
})
export class ListCardProductsComponent implements OnInit {

  products:Product[];

  constructor(private productsService:ProductsService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.getProducts();
  }
  
  async openModalAddProduct(){
    const modal = this.modalController.create({
      component: AddFormProductsComponent
    });
    (await modal).onWillDismiss().then(data => {this.getProducts()});
    (await modal).present();
  }

  async openModalUpdateProduct(product:Product){
    const modal = this.modalController.create({
      component: AddFormProductsComponent,
      componentProps: {product : product}
    });
    (await modal).onWillDismiss().then(data => {this.getProducts()});
    (await modal).present();
  }

  getProducts(){
    this.productsService.getProducts().subscribe((products: Product[]) =>{
      this.products = products;
    })
  }
  
  deleteProduct(event:Event,idProduct: number){
    event.stopPropagation();
    this.productsService.deleteProduct(idProduct).subscribe(product => this.getProducts());
  }

}
