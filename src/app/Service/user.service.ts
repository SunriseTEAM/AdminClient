import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Module/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userurl: string;

  private baseUrl = 'http://localhost:8090/api/user/deleteUser';
  constructor(private http: HttpClient) {
    this.userurl = 'http://localhost:8090/api/user/getAll';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userurl);

  }
  public deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  public save(user: User){
    return this.http.post<User>(this.userurl, user);
  }
}
