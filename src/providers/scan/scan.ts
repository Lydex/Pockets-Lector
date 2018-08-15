import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from '../../config/url.servicios';
import { TicketProvider } from '../ticket/ticket';
import { NavController, NavParams  } from 'ionic-angular';

@Injectable()
export class ScanProvider {



  constructor(public http: HttpClient, private _tp: TicketProvider) {

  }

  buscarDatos(ticket:string){
    let url = APP_URL + "/ticket_info?" + ticket;

    this.http.get( url )
              .subscribe(data => {
                this._tp.guardarTicket(data);
              });

  }

}
