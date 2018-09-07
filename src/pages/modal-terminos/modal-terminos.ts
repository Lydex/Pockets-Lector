import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ModalTerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-terminos',
  templateUrl: 'modal-terminos.html',
})
export class ModalTerminosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTerminosPage');
  }

  aceptar(){
    if( this.platform.is("cordova") ){
      this.storage.ready()
                .then(  ()=>{
                  this.storage.set("terminos", true);
                  console.log("Terminos aceptados.");
                  this.navCtrl.pop();
                });
    } else {
      localStorage.setItem('terminos', JSON.stringify(true) );
      console.log("Terminos aceptados.");
      this.navCtrl.pop();
    }
  }

}
