import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TicketProvider {

  ticket = {};
  lista_tickets: any[] = [];

  constructor(private storage: Storage) {
  }

  cargarTickets(){
    this.storage.ready()
                .then(  ()=>{
                  this.storage.get("tickets").then( tickets => {
                    if(tickets){
                      this.lista_tickets = tickets;
                    }

                  });
                });
  }

  guardarTicket( ticket:object ){
    this.lista_tickets.push(ticket);
    this.ticket = ticket;

    this.storage.ready()
                .then(  ()=>{
                  this.storage.set("tickets", ticket);
                });
  }

}
