import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'item',
})
@Injectable()
export class ItemPipe implements PipeTransform {
    transform(items: any[], field: string, item: string): any[] {
        if (!items && items.length) {
            return [];
        }

        if (!field || !item) {
            return items;
        }

        return items.filter(singleItem =>
            singleItem[field].includes(item)
        );
    }
}