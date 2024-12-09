
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51PlmgsCRaWWPfJ2zXtlH5ffbPSzV8HaPZXfhBA2SbsmagJ97bnFkKZtY8EHrd6p7rOkJhSZz82zcA2LuMhQkdP6z00v0KaEcAN'); 

const PaymentCheckout = () => {
  return (
    <div className="payment-checkout-container">
      <h1 className="text-center my-4">Payment Checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentCheckout;
