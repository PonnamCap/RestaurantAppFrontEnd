import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order= new Order();
  submitted = false;
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
  }

  

  save() {
    this.orderService.createOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
   
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/findallOrders']);
  }
}

