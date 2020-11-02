import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Category} from '../Module/category';
import {Observable, throwError} from 'rxjs';
import {Message} from '../Module/message';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoryturl: string;
private baseurl:string;
private bassurl:string;
    constructor(private http: HttpClient) {
        this.categoryturl = 'http://localhost:8090/api/category/getAll';
        this.baseurl = 'http://localhost:8090/api/category/deletebyid'
        this.bassurl = 'http://localhost:8090/api/category'
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

    public findAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoryturl);

    }
    createCategory(category: Category): Observable<any> {
        return this.http.post<any>(`${this.bassurl}` + `/create`, category);
    }

    updateCategory(category: Category): Observable<Message> {
        return this.http.put<Message> (`${this.categoryturl}` + `/updatebyid/` + category.id, category)
            .pipe(
            );
    }
    deleteCategory(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseurl}/${id}`);
    }

    public save(category: Category) {
        return this.http.post<Category>(this.categoryturl, category);
    }

}
