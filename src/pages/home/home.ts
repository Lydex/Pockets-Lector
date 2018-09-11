import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { ScanProvider } from '../../providers/scan/scan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scan_datos:any;

  constructor(
              public http: HttpClient,
              public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public toastCtrl: ToastController,
              private _scanProv: ScanProvider,
              private platform: Platform) {

  }

  escanear(){

    if( this.platform.is("cordova") ){
      // Desde móvil
      this.barcodeScanner.scan().then( barcodeData => {
        var paramsString = barcodeData.text;
        var searchParams= new URLSearchParams(paramsString);

        if( searchParams.has("_token") ){
          this._scanProv.buscarDatos(searchParams.toString()).then( (ticket)=>{
            if(!this.isEmptyObject(ticket)){
              this.navCtrl.push("TicketInfoPage", { ticket });
            } else {
              this.mostrar_msj("No se encontró la cuenta: intente nuevamente...");
            }

          });
        } else {
          this.mostrar_msj("El código escáneado no es valido.")
        }

      }).catch(err => {
        console.error('Error: '+ err);
        this.mostrar_msj("Error: "+ err);
      });
    } else {
      // Pruebas en PC
      this._scanProv.buscarDatos("_token=gStVw50KXMQHlRHSGGFjiT7EOuomFqQB").then( (ticket)=>{
        if(!this.isEmptyObject(ticket)){
          this.navCtrl.push("TicketInfoPage", { ticket });
        } else {
          this.mostrar_msj("No se encontró la cuenta: intente nuevamente...");
        }
      });
    }
  }

  mostrar_msj( mensaje:string ){
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }

  isEmptyObject(obj) {
    return Object.keys(obj).every(k => !Object.keys(obj[k]).length);
  }

}
