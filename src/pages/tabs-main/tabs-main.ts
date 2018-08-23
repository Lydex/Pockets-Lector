import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ScanProvider } from '../../providers/scan/scan';


@IonicPage()
@Component({
  selector: 'page-tabs-main',
  templateUrl: 'tabs-main.html',
})
export class TabsMainPage {

  HomePage = HomePage;
  HistorialPage = "HistorialPage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _scanProv:ScanProvider) {
    this._scanProv.cargarTickets();
  }

}
