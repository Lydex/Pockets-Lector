import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';

/**
 * Generated class for the TicketInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-info',
  templateUrl: 'ticket-info.html',
})
export class TicketInfoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _tp: TicketProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketInfoPage');
  }

}
