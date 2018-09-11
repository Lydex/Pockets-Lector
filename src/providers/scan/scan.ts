import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { APP_URL } from '../../config/url.servicios';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScanProvider {

  lista_tickets: any = [];

  constructor( private storage: Storage, private platform: Platform, public http: HttpClient){}

  buscarDatos(ticket:string){
    let url = APP_URL + "/ticket_info?" + ticket;

    return new Promise ( (resolve, reject) => {
      this.http.get( url )
              .subscribe( data => {

                if( !this.isEmptyObject(data) ){
                  if(data['lista_prod']){
                    data['lista_prod'] = JSON.parse(data['lista_prod']);
                  }
                  this.guardarTicket(data);
                  resolve(data);
                } else {
                  resolve(false);
                }

              });
    });

  }

  cargarTickets(){
    return new Promise ( (resolve, reject) => {

      if( this.platform.is("cordova") ){
        // Desde móvil
        this.storage.ready().then( ()=> {
          this.storage.get("tickets")
          .then( tickets => {
            if(tickets){
              this.lista_tickets = tickets;
            }
            resolve();
          });
        })

      } else {
        // Desde PC
        if ( localStorage.getItem("tickets") ){
          this.lista_tickets = JSON.parse(localStorage.getItem("tickets"));
        }
        resolve();
      }
    });
  }

  guardarTicket( ticket:any ){
      var encontrado = false;

      this.lista_tickets.forEach((old, index) => {

        if( (old._token == ticket._token ) ){
          this.lista_tickets[index] = ticket;
          encontrado = true;
          console.log("Ticket existente actualizado.");
        }

      });

      if(!encontrado){
        this.lista_tickets.push( ticket );
        console.log("Ticket nuevo agregado.")
      }

      if( this.platform.is("cordova") ){
        this.storage.ready()
                  .then(  ()=>{
                    this.storage.set("tickets", this.lista_tickets);
                    console.log("Ticket almacenado.");
                  });
      } else {
        localStorage.setItem('tickets', JSON.stringify(this.lista_tickets) );
        console.log("Ticket almacenado.");
      }

  }

  isEmptyObject(obj) {
    return Object.keys(obj).every(k => !Object.keys(obj[k]).length);
  }

}
