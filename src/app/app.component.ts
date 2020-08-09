import { Component } from '@angular/core';

import { Platform, AngularDelegate } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Observable} from 'rxjs'



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  items:Observable<any[]>
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  
  ) {
   
    this.initializeApp();
  }

  initializeApp() {
  //   this.db.list('items').push({
  //     name:'karan',
  //     dob:'1322323',
  //     refhdf:"dfbdf",
  //     gnfgn:34364
  // })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
