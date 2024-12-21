import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface Bid {
    action: string | null;
    amount: number | null;
    user_id: number | null;
    contract_id: number | null;
  }

@Component({
    selector: 'app-bid',
    templateUrl: './bid.component.html',
    styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
    bid: Bid = {
        action: '',
        amount: null,
        user_id: null,
        contract_id: null
    };

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit(): void {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        this.bid.user_id = Number(userId); // Convert string to number
      } else {
        // Handle the case where user_id is not found in localStorage
        console.error('User ID not found in localStorage');
      }
  
      this.route.paramMap.subscribe(params => {
        const contractId = params.get('contract_id');
        if (contractId) {
          this.bid.contract_id = Number(contractId); 
          // Convert string to number
        }
        if(params.get('action')){
          this.bid.action = params.get('action');
        }
      });
    }

  onSubmit(): void {
    const bidPayload = {
      amount: this.bid.amount,
      action: this.bid.action,
      userId: this.bid.user_id,
      contractId: this.bid.contract_id,
      createdAt: new Date().toISOString() // Assuming you want to send the current timestamp
    };

    this.http.post('/api/bids', bidPayload).subscribe(response => {
      console.log('Bid submitted successfully:', response);
    }, error => {
      console.error('Error submitting bid:', error);
    });
  }
}