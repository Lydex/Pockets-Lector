import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ScanProvider } from '../../providers/scan/scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scan_datos:any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public toastCtrl: ToastController,
              private _sp: ScanProvider) {

  }

  escanear(){
    /*
    this.barcodeScanner.scan().then( barcodeData => {
      var paramsString = barcodeData.text;
      var searchParams= new URLSearchParams(paramsString);

      if( searchParams.has("sucursal") && searchParams.has("ticket") ){
        this._sp.buscarDatos(searchParams.toString());
      } else {
        this.mostrar_msj("El código escáneado no es valido.")
      }

    }).catch(err => {
      console.error('Error: '+ err);
      this.mostrar_msj("Error: "+ err);
    });
    */
    this._sp.buscarDatos("sucursal=1&ticket=123456");
    this.navCtrl.push("TicketInfoPage");
  }

  mostrar_msj( mensaje:string ){
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }

}
