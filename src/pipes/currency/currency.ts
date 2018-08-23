import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CurrencyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, ...args) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    return formatter.format(value);
  }
}
