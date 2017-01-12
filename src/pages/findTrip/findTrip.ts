import { Component, Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { Config } from '../config'
import { car, duration, facet, facetItem, links, TripsResponse } from '../tripDeclarations'
import { AlertController, NavController } from 'ionic-angular';
import { PotentialTripsPage } from '../potentialTrips/potentialTrips'


@Component({
    templateUrl: 'findTrip.html'
})

export class FindTrip {

    public findTripInit: FindTripInit = new FindTripInit();

    public foundTrips: any = {};

    constructor(private http: Http, private nav: NavController, public alertCtrl: AlertController) {
       
    }

    findTrips()
    {
        let conf = new Config();
        let head = new headers();


        let searchUrl: string = conf.getSearchUrl(this.findTripInit.from, this.findTripInit.to, "en_GB", "json", "EUR", "10", "asc", this.findTripInit.numberOfSeats, 50,
            this.findTripInit.dateFrom, this.findTripInit.dateTo);

        this.http.get(searchUrl, head)
            .subscribe(
            (r: any) => {//correct response
                let resp = Object.create(TripsResponse.prototype);
                let respRecieved = Object.assign(resp, r.json());
                this.nav.push(PotentialTripsPage, respRecieved);
            },
            (e: any) => {//error
                let alert = this.alertCtrl.create({
                    title: 'Something went wrong',
                    subTitle: e,
                    buttons: ['OK']
                });
                alert.present();
            },
            () => {//complete
                
            });
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
        this.dateFrom = currentDate.toISOString();
        this.dateTo = "" + currentDate.toISOString();
    }

}

