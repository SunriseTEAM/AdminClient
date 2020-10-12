import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../Module/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private producturl: string;

  constructor(private http: HttpClient) {
    this.producturl = 'http://localhost:8090/api/product/getAll';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.producturl);

}

public save(product: Product){
    return this.http.post<Product>(this.producturl, product);
}

}
