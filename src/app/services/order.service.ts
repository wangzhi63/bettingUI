import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private orderData: any = {};

    constructor(private http: HttpClient) { 
        const userId = localStorage.getItem('user_id');
        if (userId) {
          this.orderData.sellerId = Number(userId); // Convert string to number
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
}