import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ScanProvider } from '../scan/scan';
import { APP_URL } from '../../config/url.servicios';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketProvider {

  constructor(private storage: Storage, private _scanProv: ScanProvider) {}


}
