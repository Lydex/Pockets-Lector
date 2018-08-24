import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanProvider } from '../../providers/scan/scan';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _scanProv: ScanProvider) {}

  verDetalle(ticket:object){
    this.navCtrl.push("TicketInfoPage", { ticket });
  }

}
