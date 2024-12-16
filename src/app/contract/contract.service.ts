import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from './contract.model';
import { ContractWithBids } from './contract-with-bids.model'; 


@Injectable({
    providedIn: 'root'
})
export class ContractService {

    private apiUrl = '/api/contracts';
    private withBidsURL='/api/contracts/with-bids';

    constructor(private http: HttpClient) { }

    getContracts(): Observable<Contract[]> {
        return this.http.get<Contract[]>(this.apiUrl);
    }

    getContractsWithBids(): Observable<ContractWithBids[]> {
        return this.http.get<ContractWithBids[]>(this.withBidsURL);
    }
}