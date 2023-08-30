import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  cardName: string="";
  cardNumber: string="";
  expiryDate: string="";
  cvv: string="";

  constructor() { }

  processPayment() {
    // Logic to process the payment goes here
    // You might want to call a payment API or integrate with a payment gateway like Stripe, PayPal, etc.

    console.log('Payment details:', {
      cardName: this.cardName,
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cvv: this.cvv
    });
  }
}
