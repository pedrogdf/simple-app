import { identifierModuleUrl } from '@angular/compiler'
import { ProductImage } from './productImage';

export class Product {

    id: number;
    name: string;
    description: string;
    productImages: ProductImage[];
    
}
