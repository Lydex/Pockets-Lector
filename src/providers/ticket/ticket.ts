import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ScanProvider } from '../scan/scan';
import { APP_URL } from '../../config/url.servicios';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketProvider {

  constructor(private storage: Storage, private _scanProv: ScanProvider, private http: HttpClient) {}

  actualizarTicket(ticket:any){
    let url = APP_URL + "/ticket_info?ticket_num";

    return new Promise ( (resolve, reject) => {

      this.http.get( url )
              .subscribe( data => {
                if( data ){
                  data['lista_prod'] = JSON.parse(data['lista_prod']);
                  this._scanProv.guardarTicket(data);
                  resolve(data);
                } else {
                  resolve(false);
                }
              });
    });

  }

}
