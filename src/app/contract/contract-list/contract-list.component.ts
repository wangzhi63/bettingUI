import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Contract } from '../contract.model';
import { ContractWithBids } from '../contract-with-bids.model';


@Component({
    selector: 'app-contract-list',
    templateUrl: './contract-list.component.html',
    styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
    contracts: Contract[] = [];
    contractsWithBids: ContractWithBids[] = [];

    constructor(private contractService: ContractService) {}

    ngOnInit(): void {
        // this.contractService.getContracts().subscribe((data: Contract[]) => {
        //     this.contracts = data;
        // });
        this.contractService.fetchContractsWithBids();
        this.contractService.contractsWithBids$
        .subscribe((data: ContractWithBids[]) => {
            this.contractsWithBids = data;
        });
    }
}