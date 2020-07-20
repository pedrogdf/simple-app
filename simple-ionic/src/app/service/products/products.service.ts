import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/model/product';
import { Observable, throwError } from 'rxjs';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  full_products_url_resource = environment.BASE_URL_REST+'products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.full_products_url_resource).pipe()
  }

  saveProduct(product:Product): Observable<Product> {
    return this.http.post<Product>(this.full_products_url_resource, JSON.stringify(product),this.httpOptions).pipe()
  }

  getProductById(id : number): Observable<Product> {
    return this.http.get<Product>(this.full_products_url_resource+'/'+id).pipe()
  }

  updateProduct(product:Product): Observable<Product> {
    return this.http.put<Product>(this.full_products_url_resource+'/'+ product.id, JSON.stringify(product), this.httpOptions).pipe()
  }

  deleteProduct(idProduct:number): Observable<Product> {
    return this.http.delete<Product>(this.full_products_url_resource+'/'+ idProduct, this.httpOptions ).pipe()
  }

} 


