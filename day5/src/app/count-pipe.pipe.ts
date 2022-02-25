import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPipe'
})
export class CountPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value +'  EGY';
  }

}
