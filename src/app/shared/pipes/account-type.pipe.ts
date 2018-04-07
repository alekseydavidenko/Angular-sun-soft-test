import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountTypePipe'
})
export class AccountType implements PipeTransform {
  transform(items: any, criteria: string): any {
    if (criteria === 'all') {
      return items;
    }
    const newItem = [];
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].accountType === criteria) {
        newItem.push(items[i]);
      }
    }
    return newItem;
  }
}
