import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from './contract.model';

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    private apiUrl = '/api/contracts';

    constructor(private http: HttpClient) { }

    getContracts(): Observable<Contract[]> {
        return this.http.get<Contract[]>(this.apiUrl);
    }
}