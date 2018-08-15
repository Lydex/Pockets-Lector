import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { APP_URL } from '../../config/url.servicios';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketProvider {

  ticket_info: any[] = [];

  constructor(public http: Http) {
    //console.log('Hello TicketProvider Provider');
    //this.verTicket(1);
  }

  /*
  verTicket(ticket_num:any){
    let url = APP_URL + "/ticket_info/" + ticket_num;

    this.http.get( url )
              .map( resp => resp  )
              .subscribe( response => {
                console.log(response);
              });
  }
  */

  obtenerTickets(){

  }

}
