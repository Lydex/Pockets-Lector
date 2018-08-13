import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { APP_URL } from '../../config/url.servicios';
import 'rxjs/add/operator/map';

/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  ticket_info: any[] = [];

  constructor(public http: Http) {
    //console.log('Hello TicketProvider Provider');
    this.obtenerTicket(1);
  }

  obtenerTicket(ticket_num:any){
    let url = APP_URL + "/ticket_info/" + ticket_num;

    this.http.get( url )
              .map( resp => resp  )
              .subscribe( response => {
      console.log(response);
    });
  }

}
