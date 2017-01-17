import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripsResponse, trip } from '../tripDeclarations';
import { IHelper, Helper } from '../HelperFunctions';
import { List } from 'linqts';

@Component({
  selector: 'page-potentialTrips',
  templateUrl: 'potentialTrips.html'
})
export class PotentialTripsPage {
    tripsResp: TripsResponse;
    helper: IHelper;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.tripsResp = this.navParams.data;
        this.helper = new Helper();

        let tripsUnsorted = new List<trip>(this.tripsResp.trips);
        this.tripsResp.trips = tripsUnsorted.OrderBy(t => t.departure_date).ToArray();

        for (let trip of this.tripsResp.trips)
        {
            let tm = trip.departure_date;
            trip.departureTimeFormatted = tm.toString();
            trip.tripDurationHours = Math.round(trip.duration.value / 3600);
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialTripsPage');
  }

}
