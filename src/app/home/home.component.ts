// import { Component } from '@angular/core';
// import { OAuthService } from 'angular-oauth2-oidc';

// @Component({
//   selector: 'app-home',
//   template: `
//     <div *ngIf="!isAuthenticated">Loading...Not authenticated yet, you might need to hit the enter again</div>
//     <div *ngIf="isAuthenticated">
//       <h1>Welcome, {{ user?.name }}</h1>
//       <h1>we will notify you through this email {{ user?.email }}</h1>
//       <button (click)="logout()">Logout</button>
//     </div>
//   `
// })
// export class HomeComponent {
//  isAuthenticated: boolean = false;
//   user: any;

//   constructor(private oauthService: OAuthService) {
//     this.isAuthenticated = this.oauthService.hasValidAccessToken();
//     if (this.isAuthenticated) {
//       this.user = this.oauthService.getIdentityClaims();
//       console.log(this.user);
//     }
//   }

//   logout() {
//     this.oauthService.logOut();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;
  user: any;

  constructor(private oauthService: OAuthService) {}

  ngOnInit(): void {
    // Check the initial authentication state
    this.isAuthenticated = this.oauthService.hasValidAccessToken();
    this.user = this.oauthService.getIdentityClaims();

    // Subscribe to authentication state changes
    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received' || event.type === 'token_refreshed') {
        this.isAuthenticated = this.oauthService.hasValidAccessToken();
        this.user = this.oauthService.getIdentityClaims();
      }
    });
  }
}