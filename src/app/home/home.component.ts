import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  template: `
    <div *ngIf="!isAuthenticated">Loading...</div>
    <div *ngIf="isAuthenticated">
      <h1>Welcome, {{ user?.name }}</h1>
      <h1>we will notify you through this email {{ user?.email }}</h1>
      <button (click)="logout()">Logout</button>
    </div>
  `
})
export class HomeComponent {
 isAuthenticated: boolean = false;
  user: any;

  constructor(private oauthService: OAuthService) {
    this.isAuthenticated = this.oauthService.hasValidAccessToken();
    if (this.isAuthenticated) {
      this.user = this.oauthService.getIdentityClaims();
      console.log(this.user);
    }
  }

  logout() {
    this.oauthService.logOut();
  }
}