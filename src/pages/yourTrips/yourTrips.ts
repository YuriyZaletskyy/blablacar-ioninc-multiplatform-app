import { Component } from '@angular/core'
import { NavController} from 'ionic-angular'

import { FindTrip } from '../findTrip/findTrip';
import { ProposeTrip } from '../proposeTrip/proposeTrip';

@Component({
    templateUrl: 'yourTrips.html'
})

export class YourTrips {
    constructor(private nav: NavController) {

    }

    goToProposeTrip()
    {
        this.nav.push(ProposeTrip);
    }

    goToFindTrip()
    {
        this.nav.push(FindTrip);
    }
}