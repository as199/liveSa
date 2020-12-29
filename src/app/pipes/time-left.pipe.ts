import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  // @ts-ignore
  transform(value: Date): string {
    const currentTime =new Date();
    const diff = currentTime.getTime() - value.getTime();
    const y = diff/1000/60/60/24/365;
    if(y >0) return Math.floor(y)+' ans';
    const d = diff/1000/60/60/24;
    if(d >0) return Math.floor(d)+' jours';
    const h = (diff/1000/60/60)% 24;
    if(h >0) return Math.floor(h)+' h';
    const m = (diff/1000/60)% 60;
    if(m >0) return Math.floor (m)+' minutes';
    const s = (diff/1000)% 60;
    if(s > 0) return Math.floor(s)+' seconde';
    return '1 s'
  }
}
