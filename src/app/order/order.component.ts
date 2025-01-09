import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderForm: FormGroup;
  contractId: number=1;

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router, private orderService: OrderService) {
    this.route.paramMap.subscribe(params => {
      this.contractId = Number(params.get('contract_id'));


    });
    this.orderForm = this.fb.group({
      price: ['', Validators.required],
      quantity: ['', Validators.required]
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
