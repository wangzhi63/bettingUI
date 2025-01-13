import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../user/user.service';


import { Order } from '../../services/order.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: any[] = [];
  selectedStatus: string = 'PENDING';


  userId: number = 1; // Replace with the actual userId

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
     this.userId = Number(localStorage.getItem('user_id'));
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrdersForUser(this.userId).subscribe(orders => {
      this.orders = orders;
      this.filterOrders();
    });
  }

  filterOrders(): void {
    if (this.selectedStatus === 'ALL') {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter(order => order.status === this.selectedStatus);
    }
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.filterOrders();
  }

  acceptOrder(order: any): void {
    this.orderService.updateOrderStatus(order.id, 'ACCEPTED').subscribe(response => {
      console.log('Order accepted', response);
      // Update the order status in the UI if needed
      this.fetchOrders();
    });
  }

  rejectOrder(order: any): void {
    this.orderService.updateOrderStatus(order.id, 'REJECTED').subscribe(response => {
      console.log('Order rejected', response);
      // Update the order status in the UI if needed
      this.fetchOrders();
    });
  }


}
