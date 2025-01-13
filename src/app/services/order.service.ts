import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private orderData: any = {};
    private orders: Order[] = [];

    constructor(private http: HttpClient) { 
        const userId = localStorage.getItem('user_id');
        if (userId) {
          this.orderData.sellerId = Number(userId);
          this.orderData.createdById = Number(userId); // Convert string to number
        } else {
          // Handle the case where user_id is not found in localStorage
          console.error('User ID not found in localStorage');
        }

    }

    setOrderData(data: any) {
        this.orderData = { ...this.orderData, ...data };
    }

    getOrderData() {
        return this.orderData;
    }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>('/api/users');
    }

    createOrder(order: any): Observable<any> {
        return this.http.post('/api/orders', order);
    }

    getOrdersForUser(buyerId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`/api/orders/buyer/${buyerId}`);
      }

    updateOrderStatus(orderId: number, status: string): Observable<any> {
        return this.http.patch(`/api/orders/updateStatus/${orderId}`, status, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
}