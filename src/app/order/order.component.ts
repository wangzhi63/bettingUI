import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from '../contract/contract.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderForm: FormGroup;
  contractId: number=1;
  contractWithBids: any;

  constructor(private fb: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute, 
    private router: Router, 
    private orderService: OrderService) {
    this.route.paramMap.subscribe(params => {
      this.contractId = Number(params.get('contract_id'));


    });
    this.orderForm = this.fb.group({
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.contractService.contractsWithBids$.subscribe(contracts => {
      const contract = this.contractService.getContractWithBidsById(this.contractId);
      // Now you can use this.contract to access the specific contract
      this.contractWithBids = contract;
      console.log(contract);
    });
  }
  onSubmit() {
    if (this.orderForm.valid) {
      const formData = {...this.orderForm.value, contractId: this.contractId, status:'PENDING'};
      this.orderService.setOrderData(formData);
      this.router.navigate(['/user-list']);
    }
  }
}
