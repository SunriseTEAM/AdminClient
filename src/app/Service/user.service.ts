import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Category} from '../Module/category';
import {Observable, throwError} from 'rxjs';
import {Message} from '../Module/message';
import {User} from '../Module/user/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userurl: string;
    private baseurl: string;
    private bassurl: string;

    constructor(private http: HttpClient) {
        this.userurl = 'http://localhost:8090/api/user';
        this.baseurl = 'http://localhost:8090/api/user/deleteUser'
        this.bassurl = 'http://localhost:8090/api/user'
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

    public findAll(): Observable<User[]> {
        return this.http.get<User[]>(this.userurl + '/getAll');

    }

    createUser(user: User): Observable<any> {
        return this.http.post<any>(`${this.bassurl}` + `/create`, user);
    }

    updateUserById(User: User): Observable<User> {
        return this.http.put<User>(`${this.userurl}` + `/updatebyid/` + User.id, User)
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseurl}/${id}`);
    }

    public save(user: User) {
        return this.http.post<User>(this.userurl, User);
    }

}
