import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
})
@Injectable()
export class CategoryPipe implements PipeTransform {
    transform(items: any[], field: string, category: string): any[] {
        if (!items && items.length) {
            return [];
        }

        if (!field || !category) {
            return items;
        }

        return items.filter(singleItem =>
            singleItem[field].includes(category)
        );
    }
}