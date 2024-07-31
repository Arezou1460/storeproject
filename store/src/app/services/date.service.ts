import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  showTodayDate() {
    let date = new Date();
    return date;
  }

}
