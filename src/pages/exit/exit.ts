import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Platform} from 'ionic-angular';

/*
  Generated class for the Exit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exit',
  templateUrl: 'exit.html'
})
export class ExitPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) { }

    exitApp() {
        this.platform.exitApp();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExitPage');
  }

}
