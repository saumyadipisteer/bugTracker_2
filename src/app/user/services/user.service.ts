import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseData, User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  postUserData(data: User): Observable<ResponseData> {
    return this.http.post<ResponseData>(`${this._url}user`, data);
  }

  postNewUser(data: User): Observable<ResponseData> {
    return this.http.post<ResponseData>(`${this._url}createUser`, data);
  }
}
