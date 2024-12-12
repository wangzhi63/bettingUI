import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Contract } from '../contract.model';

@Component({
    selector: 'app-contract-list',
    templateUrl: './contract-list.component.html',
    styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
    contracts: Contract[] = [];

    constructor(private contractService: ContractService) {}

    ngOnInit(): void {
        this.contractService.getContracts().subscribe((data: Contract[]) => {
            this.contracts = data;
        });
    }
}