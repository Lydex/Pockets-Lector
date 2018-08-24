import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { HomePage } from '../home/home';
import { TicketProvider } from '../../providers/ticket/ticket';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-ticket-info',
  templateUrl: 'ticket-info.html',
})
export class TicketInfoPage {

  validar:any;
  ticket:any = {};
  ticket_total:number = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: HttpClient,
              private _ticketProv: TicketProvider) {


  }

  calcularTotal(){
    if(this.ticket.lista_prod[0]){
      this.ticket_total = 0;
      this.ticket.lista_prod.forEach( item => {
        this.ticket_total += item.precio;
      });
    }

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
    this.calcularTotal();
    this.monitorearTicket();
  }

  monitorearTicket(){
    if( this.ticket.estatus === 1 ){
      this.validar = Observable.interval(20000).subscribe( () => {
        this._ticketProv.actualizarTicket( this.ticket ).then( (updated_ticket)=>{
          console.log(updated_ticket)
          this.ticket = updated_ticket;
          this.calcularTotal();
          if ( this.ticket.estatus === 0){
            this.validar.unsubscribe();
          }
        });
      });
    }
  }





}
