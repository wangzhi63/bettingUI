import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../user/user.service';


import { Order } from '../../services/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];


  userId: number = 1; // Replace with the actual userId

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('user_id'));
    this.orderService.getOrdersForUser(userId).subscribe(orders => {
      this.orders = orders;

    });
  }


}
