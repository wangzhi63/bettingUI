import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contract } from './contract.model';
import { ContractWithBids } from './contract-with-bids.model'; 


@Injectable({
    providedIn: 'root'
})
export class ContractService {
    private contractsWithBidsSubject = new BehaviorSubject<ContractWithBids[]>([]);
    contractsWithBids$ = this.contractsWithBidsSubject.asObservable();

    private apiUrl = '/api/contracts';
    private withBidsURL='/api/contracts/with-bids';

    constructor(private http: HttpClient) { }

    getContracts(): Observable<Contract[]> {
        return this.http.get<Contract[]>(this.apiUrl);
    }

    fetchContractsWithBids(): void {
        this.http.get<ContractWithBids[]>(this.withBidsURL)
        .subscribe(contractsWithBids => this.contractsWithBidsSubject.next(contractsWithBids))
        ;
    }

    getContractWithBidsById(contractId: number): ContractWithBids | undefined {
        const contractsWithBids = this.contractsWithBidsSubject.getValue();
        return contractsWithBids.find(contractWithBids => contractWithBids.id === contractId);
    }

    createContract(contract: Contract): Observable<Contract> {
        return this.http.post<Contract>(this.apiUrl, contract);
      }
}