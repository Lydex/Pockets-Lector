import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';

@IonicPage()
@Component({
  selector: 'page-ticket-info',
  templateUrl: 'ticket-info.html',
})
export class TicketInfoPage {

  ticket:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _tp: TicketProvider) {

              this.ticket = this.navParams.get("ticket");
  }



}
