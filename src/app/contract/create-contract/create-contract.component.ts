import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractService } from '../contract.service';
import { Contract } from '../contract.model';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent {
  contractForm: FormGroup;
  contract: Contract;

  constructor(private fb: FormBuilder, private contractService: ContractService) {
    this.contractForm = this.fb.group({
      start_date: [null],
      end_date: [null],
      assertion: ['']
    });
    this.contract = {
      startDate: new Date(),
      endDate: new Date(),
      assertionText: '',
      creatorId: 0
    };
  }

  onSubmit() {
    console.log(this.contractForm.value);
    this.contract = {
      startDate: this.contractForm.value.start_date,
      endDate: this.contractForm.value.end_date,
      assertionText: this.contractForm.value.assertion,
      creatorId: Number(localStorage.getItem('user_id')),
      title: 'Contract Title'
    }
    this.contractService.createContract(this.contract).subscribe(response => {
      console.log('Contract created successfully:', response);
    }, error => {
      console.error('Error creating contract:', error);
    });
  }
}
