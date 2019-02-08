import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bookingID',
})
@Injectable()
export class BookingPipe implements PipeTransform {
    transform(booking: any[], field: string, ID: string): any[] {
        if (!booking && booking.length) {
            return [];
        }

        if (!field || !ID ) {
            return booking;
        }

        return booking.filter(singleItem =>
            singleItem[field].includes(ID)
        );
    }
}