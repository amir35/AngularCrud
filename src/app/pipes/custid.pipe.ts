import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custid'
})
export class CustidPipe implements PipeTransform {

  transform(value: number, cid: number): number {
    return null;
  }

}
