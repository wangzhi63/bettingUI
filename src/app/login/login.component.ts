import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  template: '<div>Loading...</div>'
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}