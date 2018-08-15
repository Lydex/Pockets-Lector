import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';
import { TicketInfoPage } from '../ticket-info/ticket-info';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  lista_tickets: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _tp: TicketProvider) {
    this.lista_tickets = _tp.lista_tickets;
  }

  verDetalle(ticket:object){
    this.navCtrl.push("TicketInfoPage", ticket);
  }

}
