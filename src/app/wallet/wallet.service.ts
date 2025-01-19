// get the balance from the remote server
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Adjust the path as necessary
import { Wallet } from './wallet.model'; // Adjust the path as necessary

@Injectable({
    providedIn: 'root'
})
export class WalletService {

    private apiUrl = `/api/wallets`; // Ensure environment.apiUrl is set correctly

    constructor(private http: HttpClient) { }

    getWalletByUserId(userId: number): Observable<Wallet> {
        return this.http.get<Wallet>(`${this.apiUrl}/${userId}`);
    }
}