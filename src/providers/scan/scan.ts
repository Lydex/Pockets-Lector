import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { APP_URL } from '../../config/url.servicios';
import 'rxjs/add/operator/map';

@Injectable()
export class ScanProvider {



  constructor(public http: Http) {

  }

  buscarDatos(ticket:string){
    let url = APP_URL + "/ticket_info?" + ticket;

    this.http.get( url )
              .map( resp => resp  )
              .subscribe( response => {
                console.log(response);
              });
  }


}
