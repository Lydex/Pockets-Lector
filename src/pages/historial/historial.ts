import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanProvider } from '../../providers/scan/scan';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  lista_tickets: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _scanProv: ScanProvider) {
    _scanProv.cargarTickets().then( ()=>{
      this.lista_tickets = _scanProv.lista_tickets;
      console.log(this.lista_tickets);
    })

  }

  verDetalle(ticket:object){
    this.navCtrl.push("TicketInfoPage", { ticket });
  }

}
