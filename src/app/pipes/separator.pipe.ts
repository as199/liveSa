import { Pipe, PipeTransform } from '@angular/core';
import {UtilsService} from '../utils.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {
  }

  transform(value: number, sep: string): string{
    return this.utilsService.numberSeparator(value, sep);
  }

}
