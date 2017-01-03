import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { YourTrips } from '../pages/yourTrips/yourTrips'
import { FindTrip } from '../pages/findTrip/findTrip'

import { ProposeTrip } from '../pages/proposeTrip/proposeTrip';
import { FeedBack } from '../pages/feedBack/feedBack';
import { Inbox } from '../pages/inbox/inbox';
import { Support } from '../pages/support/support';
import { ExitPage } from '../pages/exit/exit'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = YourTrips;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Your trips', component: YourTrips },
        { title: 'Find trip', component: FindTrip },
        { title: 'Propose trip', component: ProposeTrip },
        { title: 'Feedback', component: FeedBack },
        { title: 'Inbox', component: Inbox },
        { title: 'Exit', component: ExitPage },
        { title: 'Support', component: Support }
    ];

  }

  initializeApp() {
      

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
