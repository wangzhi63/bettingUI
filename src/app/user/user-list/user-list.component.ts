import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: any[] = [];

    constructor(private orderService: OrderService, private router: Router) { }

    ngOnInit(): void {
        this.orderService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    selectUser(userId: number) {
        const orderData = this.orderService.getOrderData();
        orderData.buyerId = userId;
        this.orderService.createOrder(orderData).subscribe(() => {
            // Navigate to a confirmation page or back to the order form
            this.router.navigate(['/order']);
        });
    }
}