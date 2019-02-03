import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'staff',
})
@Injectable()
export class StaffPipe implements PipeTransform {
    transform(staffs: any[], field: string, staff: string): any[] {
        if (!staffs && staffs.length) {
            return [];
        }

        if (!field || !staff) {
            return staffs;
        }

        return staffs.filter(singleItem =>
            singleItem[field].includes(staff)
        );
    }
}