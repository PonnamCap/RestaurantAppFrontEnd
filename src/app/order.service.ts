import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "api/v1/findallOrders";
 
  
  constructor(private httpClient: HttpClient) { }

  getOrdersList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  createOrder(order: Order): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, order);
  }

  getOrderById(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`${this.baseUrl}/${id}`);
  }
  updateOrder(id: string, order: Order): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, order);
  }
  deleteOrder(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
