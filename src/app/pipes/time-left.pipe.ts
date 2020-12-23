import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  // @ts-ignore
  transform(value: Date): string {
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const year = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    if (year > 0) { return year + ' year ago'; }
    const month = Math.floor((diff / 1000 / 60 / 60 / 24 ) % 12);
    if (month > 0) { return month + ' months ago'; }
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    if (day > 0) { return day + ' day ago'; }
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    if (hours > 0) { return hours + ' hours left'; }
    const minutes = Math.floor((diff / 1000 / 60 ) % 60);
    if (minutes > 0) { return minutes + ' minutes left'; }
    const seconds = Math.floor((diff / 1000 ) % 60);
    if (seconds > 0) { return seconds + ' seconds left'; }
    return '1s';
  }
}
