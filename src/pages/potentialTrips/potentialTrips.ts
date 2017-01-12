import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripsResponse } from '../tripDeclarations'

@Component({
  selector: 'page-potentialTrips',
  templateUrl: 'potentialTrips.html'
})
export class PotentialTripsPage {
    tripsResp: TripsResponse;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.tripsResp = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialTripsPage');
  }

}
