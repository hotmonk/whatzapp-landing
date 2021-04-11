import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
 
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_KMj7ZEcfaDq0VDhBCT8MXclB");
 
const successMessage = () => {
  return (
    <div className="success-msg">
      ...
      ...
    </div>
  )
}
 
const cart = () => {
  return (
    <React.Fragment>
      ...
      ...
    </React.Fragment>
  )
}
 
function Checkout() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
 
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h4>Stripe Integration - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h4>
      </div>
 
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div>
          <div className="col-md-7 order-md-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>
 
    </div>
  );
}
 
export default Checkout;