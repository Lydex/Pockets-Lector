import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScanProvider } from '../providers/scan/scan';

//import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsMainPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, _scanProv: ScanProvider) {
    platform.ready().then(() => {
      _scanProv.cargarTickets();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

