import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs-main',
  templateUrl: 'tabs-main.html',
})
export class TabsMainPage {

  HomePage:any;
  HistorialPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.HomePage = HomePage;
    this.HistorialPage = "HistorialPage";
  }

}
