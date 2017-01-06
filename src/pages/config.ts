

import { Component } from '@angular/core'

@Component({
})

export class Config {
    public apiKey: string = '7aa9393a47c24d8b9085187163f5d241';
    public url: string = 'https://public-api.blablacar.com/api/v2/trips?key=';
    //https://public-api.blablacar.com/api/v2/trips?key=7aa9393a47c24d8b9085187163f5d241&
    constructor() {
    }

    getSearchUrl(fn: string, tn: string, locale: string = "en_GB", format: string = "json",
        cur: string = "EUR", radius: string = "10", sort: string = "trip_price",
        seats: Number = 2, limit: number = 50, dbFrom: string, dbTo: string): string {
        let url: string = "http://localhost:8100/api/v2/trips?key=7aa9393a47c24d8b9085187163f5d241&";
        url = url + 'fn=' + fn;
        url = url + '&' + 'tn=' + tn;
        url = url + '&' + 'locale=' + locale;
        url = url + '&_format=' + format;
        url = url + '&cur=' + cur;
        url = url + '&db=' + dbFrom.substring(0, 10);
        url = url + '&de=' + dbTo.substring(0, 10);
        url = url + '&hb=0&he=23';
        url = url + '&page=1';
        url = url + '&seats=' + seats;
        url = url + '&sort=trip_price&order=desc&limit=50&radius=10';
        return url;
    }
}