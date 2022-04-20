import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseData } from 'src/app/user/interface/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _url: string = environment.apiUrl;
  checkUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loginStatus$ = this.checkUser.asObservable();
  constructor(private http: HttpClient) {}

  getReports(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this._url}reports`);
  }

  /**
   * Generates date
   * @returns `string`
   */
  generateDate(): string {
    const day = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const date = `${day[new Date().getDay()]} ${this.pad(
      new Date().getMonth() + 1
    )} ${new Date().getFullYear()}`;

    return date;
  }

  /**
   * Generates time
   * @returns `string`
   */
  generateTime(): string {
    return new Date().toLocaleTimeString('en-IN', { timeZoneName: 'short' });
  }

  private pad(number: number): string | number {
    return number < 10 ? '0' + number : number;
  }
}
