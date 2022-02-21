import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
