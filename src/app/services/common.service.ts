import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Description } from '../bug-tracker/interface/description';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  checkUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn
  );

  loginStatus$ = this.checkUser.asObservable();
  constructor() {}

  // getReports(): Observable<Description[]> {
  //   return this.http.get<Description[]>(`${this._url}reports`);
  // }

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
