import { Component, Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { Config } from '../config'

import 'rxjs';
import { Observable } from 'rxjs/Observable'

@Component({
    templateUrl: 'findTrip.html'
})

export class FindTrip {

    public findTripInit: FindTripInit = new FindTripInit();

    public foundTrips: any = {};

    constructor(private http: Http) {
       
    }

    findTrips()
    {
        let conf = new Config();
        let head = new headers();


        let searchUrl: string = conf.getSearchUrl(this.findTripInit.from, this.findTripInit.to, "en_US", "json", "USD", "10", "asc", this.findTripInit.numberOfSeats, 50,
            this.findTripInit.dateFrom, this.findTripInit.dateTo);

        this.http.get(searchUrl, head)
            .subscribe(
            (r: any) => {//correct response
                debugger;
            },
            (e: any) => {//error
                debugger;
            },
            () => {//complete
                debugger;
            });

        debugger;

    }

}

export class headers
{
    public accept: string = "application/json";
    public key: string = (new Config()).apiKey;
}

export class FindTripInit
{
    public from: string = "";
    public to: string = "";
    public dateFrom: string;
    public dateTo: string;
    public numberOfSeats: Number = 2;

    constructor()
    {
        let currentDate: Date = new Date();
        debugger;
        this.dateFrom = currentDate.toISOString();
        this.dateTo = "" + currentDate.toISOString();
    }

}