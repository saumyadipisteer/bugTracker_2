import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = `http://localhost:3000/`; 
  constructor(private http: HttpClient) { }


  postUserData(data: User):Observable<User>{
    return this.http.post<User>(`${this.url}user`,data);
  }

  postNewUser(data: User):Observable<User>{
    return this.http.post<User>(`${this.url}createUser`,data);
  }

}
