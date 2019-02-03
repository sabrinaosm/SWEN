import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
@Injectable()
export class MonthPipe implements PipeTransform {
    transform(items: any[], field: string, month: string): any[] {
        if (!items && items.length) {
            return [];
        }

        if (!field || !month) {
            return items;
        }

        return items.filter(singleItem =>
            singleItem[field].includes(month)
        );
    }
}
