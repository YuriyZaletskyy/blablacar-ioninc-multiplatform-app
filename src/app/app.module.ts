import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { YourTrips } from '../pages/yourTrips/yourTrips';
import { FindTrip } from '../pages/findTrip/findTrip';
import { ProposeTrip } from '../pages/proposeTrip/proposeTrip';
import { FeedBack } from '../pages/feedBack/feedBack';
import { Inbox } from '../pages/inbox/inbox';
import { Support } from '../pages/support/support';
import {LoginPage } from '../pages/login/login';
import {ExitPage } from '../pages/exit/exit';


@NgModule({
  declarations: [
      MyApp,
      YourTrips,
      FindTrip,
      ProposeTrip,
      FeedBack,
      Inbox,
      Support,
      LoginPage,
      ExitPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      YourTrips,
      FindTrip,
      ProposeTrip,
      FeedBack,
      Inbox,
      Support,
      LoginPage,
      ExitPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]

})
export class AppModule {}
