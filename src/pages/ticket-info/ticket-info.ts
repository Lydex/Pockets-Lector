import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { HomePage } from '../home/home';
import { ScanProvider } from '../../providers/scan/scan';
import { APP_URL } from '../../config/url.servicios';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-ticket-info',
  templateUrl: 'ticket-info.html',
})
export class TicketInfoPage {

  validar:any;
  ticket:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: HttpClient,
              private _scanProv: ScanProvider) {


  }

  ionViewCanEnter(){
    if( this.navParams.get("ticket") ){
      this.ticket = this.navParams.get("ticket");
    } else {
      this.toastCtrl.create({
        message: 'No se encontró un ticket para mostrar.',
        duration: 3000,
        position: 'top'
      }).present();

      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }
  }

  ionViewDidLoad () {
    if( this.ticket.estatus === 1 ){
      this.validar = Observable.interval(20000).subscribe( x => {
        this.obtenerTicket( this.ticket.id ).then( (updated_ticket)=>{
          this.ticket = updated_ticket;
          if ( this.ticket.estatus === 0){
            this.validar.unsubscribe();
          }
        });
      });
    }
  }

  obtenerTicket(ticket_id:number){
    let url = APP_URL + "/ticket_info/" + ticket_id;

    return new Promise ( (resolve, reject) => {
      this.http.get( url )
              .subscribe( data => {
                if( data ){
                  this._scanProv.guardarTicket(data);
                  resolve(data);
                } else {
                  resolve(false);
                }
              });
    });

  }



}
