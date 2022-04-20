import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  checkUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn
  );

  loginStaus$ = this.checkUser.asObservable();
  constructor() {}

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
