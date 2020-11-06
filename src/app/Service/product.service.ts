import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Category} from '../Module/category';
import {Observable, throwError} from 'rxjs';
import {Message} from '../Module/message';
import {Product} from '../Module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private producturl: string;
  private baseurl: string;
  private bassurl: string;
  private categoryurl: string;

  constructor(private http: HttpClient) {
    this.producturl = 'http://localhost:8090/api/product';
    this.baseurl = 'http://localhost:8090/api/product/deletebyid';
    this.bassurl = 'http://localhost:8090/api/product';
    this.categoryurl ='http://localhost:8090/api/product';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  };

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.producturl + '/getAll');

  }

  createProduct1(product: Product): Observable<any> {
    return this.http.post<any>(`${this.bassurl}` + `/create`, product);
  }

  updateProduct1(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.producturl}` + `/updatebyid/` + product.id, product)
  }

  deleteProduct1(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseurl}/${id}`);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.producturl, product);
  }

  getAllProduct(): Observable<Product[]> {
  return this.http.get<Product[]>(this.producturl + '/getAllCategory');
  }

}
