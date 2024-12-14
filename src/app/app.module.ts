


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractService } from './contract/contract.service';
import { BidComponent } from './bid/bid.component';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContractListComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OAuthModule.forRoot(),
    FormsModule
    // AppRoutingModule
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
