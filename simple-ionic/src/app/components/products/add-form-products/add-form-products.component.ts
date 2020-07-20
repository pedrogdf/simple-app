import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/service/products/products.service';
import { Product } from 'src/app/model/product';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { ProductImage } from 'src/app/model/productImage';

const { Camera, Filesystem, Storage } = Plugins;

@Component({
  selector: 'app-add-form-products',
  templateUrl: './add-form-products.component.html',
  styleUrls: ['./add-form-products.component.scss'],
})
export class AddFormProductsComponent implements OnInit {

  @Input() product:Product;

  productForm:FormGroup;
  imagesBase64 = [];
  isUpdate:boolean = false;

  constructor(private productsService:ProductsService,
    private modalController:ModalController,
    private formBuilder: FormBuilder
     ) {
    };
  
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id:[],
      name: new FormControl('',Validators.required),
      description: new FormControl('')
    });
    if (this.product){
      this.productForm.controls['id'].setValue(this.product.id);
      this.productForm.controls['name'].setValue(this.product.name);
      this.productForm.controls['description'].setValue(this.product.description);
      this.isUpdate = true;

      this.product.productImages.forEach(productImage => this.imagesBase64.push(productImage.dataBlob));
    }else{
      this.product = new Product();
      this.product.productImages = [];
    }
  }

  saveProduct(){
    if (this.productForm.valid){
      this.product.name = this.productForm.controls.name.value;
      this.product.description = this.productForm.controls.description.value;
      if (this.isUpdate){ 
        this.productsService.updateProduct(this.product).subscribe(data => {
          this.cancel();
        });
      }else{
        this.productsService.saveProduct(this.product).subscribe(data => {
          this.cancel();
        });
      }
    }
  }

  public getPicture() {
    Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      quality: 100,
      source:CameraSource.Photos,

    }).then((image:CameraPhoto) => {
      this.readAsBase64(image);
    });
  }

  readAsBase64(cameraPhoto: CameraPhoto){
    fetch(cameraPhoto.webPath!).then(response => {
      response.blob().then(blob => {
            this.convertBlobToBase64(blob).then(base64 => {
              let base64correct:string = (base64 as string).split(',')[1];
              let newProductImage:ProductImage = new ProductImage();
              newProductImage.dataBlob = base64correct;
              this.product.productImages.push(newProductImage);
              this.imagesBase64.push(base64correct);
            })

          }
          )
        })
      }

    convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
          resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
      
  cancel() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  
}
