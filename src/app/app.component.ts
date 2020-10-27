import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Feed',
      url: 'feed',
      icon: 'home'
    },
    {
      title: 'Publicar',
      url: 'Publicar',
      icon: 'clipboard'
    },
    {
      title: 'Chat',
      url: 'Chat',
      icon: 'chatbox'
    },
    {
      title: 'Minha Conta',
      url: 'Conta',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: 'Configurecao',
      icon: 'log-out'
    }
  ];

  public appLabel = [{ title: 'Sobre o Pet App', url: 'sobre' }, { title: 'Dicas de Segurança', url: 'seguranca' }, { title: 'Termos de Uso', url: 'termos' }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
