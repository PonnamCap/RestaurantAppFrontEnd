import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 /* payments:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("http://localhost:8083/dopay/payment");
    response.subscribe((data)=>this.payments=data)
    
  }
} */
 paymentHandler:any = null;
 payments:any;
constructor(private http:HttpClient) { }

ngOnInit() {
  let response=this.http.get("http://localhost:8083/dopay/payment");
    response.subscribe((data)=>this.payments=data)
  this.invokeStripe();
}

initializePayment(amount: number) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log({stripeToken})
      alert('Stripe token generated!');
    }
  });

  paymentHandler.open({
    name: 'RestaurantApp',
    description: 'Billing',
    amount: amount * 100
  });
}

invokeStripe() {
  if(!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement("script");
    script.id = "stripe-script";
    script.type = "text/javascript";
    script.src = "https://checkout.stripe.com/checkout.js";
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken)
          alert('Payment has been successfull!');
        }
      });
    }
    window.document.body.appendChild(script);
  }
}

} 
