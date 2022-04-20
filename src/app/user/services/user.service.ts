import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseUserData, User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  postUserData(data: User): Observable<ResponseUserData> {
    return this.http.post<ResponseUserData>(`${this._url}user`, data);
  }

  postNewUser(data: User): Observable<ResponseUserData> {
    return this.http.post<ResponseUserData>(`${this._url}createUser`, data);
  }
}
