import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable({
  providedIn: 'root'
})
export class DatetimeUtilService {

  constructor() { }
    formatJsonDate(jsonDate: string): Date {
        let milliseconds = parseInt(jsonDate.substr(6));
        let tzminutes = new Date(milliseconds).getTimezoneOffset();
        return new Date(milliseconds + (tzminutes * 60000));
    }
    formatJsonDateToDate(jsonDate: string): Date {
      return new Date(parseInt(jsonDate.substr(6)));
    }

    getDayOfTheWeek(dayCount: number) {
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[(new Date().getDay() + dayCount) % 7];
    }
    getDateDiff(startDate: Date, endDate: Date): Duration {
        let duration = new Duration();
        let diff = endDate.getTime() - startDate.getTime();
        duration.days = Math.floor(diff / (60 * 60 * 24 * 1000)); //days
        duration.hours = Math.floor(diff / (60 * 60 * 1000)) - (duration.days * 24);//hours
        duration.minutes = Math.floor(diff / (60 * 1000)) - ((duration.days * 24 * 60) + (duration.hours * 60));//minutes
        duration.seconds = Math.floor(diff / 1000) - ((duration.days * 24 * 60 * 60) + (duration.hours * 60 * 60) + (duration.minutes * 60));//seconds
        return duration;
    }

    convertToHourMin(milliSeconds: number) {
        let seconds = Math.round(milliSeconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        return { hours: hours, minutes: minutes };
    }

    convertToTwentyFourHourFormat(timeDropdown): HoursMinutes {
        let time: HoursMinutes = {
            hours: parseInt(timeDropdown.selected.selectedHourValue),
            minutes: parseInt(timeDropdown.selected.selectedMinuteValue)
        }
        let meridiem = timeDropdown.selected.selectedMeridiemValue;

        if (meridiem === "PM" && !isNaN(time.hours) && time.hours < 12)
            time.hours = time.hours + 12;
        if (meridiem === "AM" && !isNaN(time.hours) && time.hours === 12)
            time.hours = time.hours - 12;
        return time;
    }

    convertToTwelveHourFormat(twentyFourHourTimeStamp: string): HoursMinutes {
        let hourMinutesArray = twentyFourHourTimeStamp.split(":");
        let date = moment().set({ hour: parseInt(hourMinutesArray[0]), minutes: parseInt(hourMinutesArray[1]) }).toDate();

        let time: HoursMinutes = {
            hours: date.getHours() > 12 ? (date.getHours() - 12) : date.getHours(),
            minutes: date.getMinutes(),
            meridiem : date.getHours() > 12 ? "PM" : "AM"
        }
        return time;
    }

    public convertTimeStampToDate(timeStamp: string): Date {
        let hourMinutesArray = timeStamp.split(":");
        let localStartDateTime = moment().set({ hour: parseInt(hourMinutesArray[0]), minutes: parseInt(hourMinutesArray[1]) });
        return localStartDateTime.toDate();
    }

    public convertDateToTimeStamp(date: Date): string {
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    }


}
export class HoursMinutes{
  hours: number;
  minutes: number;
  meridiem?: string;
}
export class Duration {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
}