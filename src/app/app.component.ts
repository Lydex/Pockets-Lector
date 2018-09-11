import { Component } from '@angular/core';
import { Platform, AlertController,ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScanProvider } from '../providers/scan/scan';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsMainPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, _scanProv: ScanProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, private storage: Storage ) {

    platform.ready().then(() => {

      if( platform.is("cordova") ){
        this.storage.ready()
                  .then(  ()=>{
                    this.storage.get("terminos").then( terminos =>{
                      if(!terminos){
                        this.verTerminos();
                      }
                    });
                  });
      } else {
        const terminos = localStorage.getItem("terminos");
        if(!terminos){
          this.verTerminos();
        }
      }


      _scanProv.cargarTickets();

      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  verTerminos(){
    const terminos = this.modalCtrl.create("ModalTerminosPage", {},{ enableBackdropDismiss: false });
    terminos.present();
  }
}

