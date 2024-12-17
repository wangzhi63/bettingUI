

import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage); // Use sessionStorage to store tokens
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initImplicitFlow();
      } else {
        console.log('Access Token:', this.oauthService.getAccessToken());
        console.log('ID Token:', this.oauthService.getIdToken());
      }
    });
  }

  ngOnInit() {
    if (this.oauthService.hasValidAccessToken()) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }
}