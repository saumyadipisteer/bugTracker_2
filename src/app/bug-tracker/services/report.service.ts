import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Description } from "../interface/description";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private _url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  postData(report: Description): Observable<Description[]>{
    return this.http.post<Description[]>(`${this._url}report`,report);
  }
}
