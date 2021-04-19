import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import logo from "../assets/logow.png"
import {Redirect} from 'react-router-dom'
import "./landing.css"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_KMj7ZEcfaDq0VDhBCT8MXclB");
 
const successMessage = () => {
  return (
    <div className="success-msg">
      <Redirect to="/home"/>
    </div>
  )
}
 
const cart = () => {
  return (
    <React.Fragment>
      30 days Subscription Whatzapp
    </React.Fragment>
  )
}
 
function Checkout() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
 
  return (
    <div className="container">
      <div className="py-5 text-center">
        <img src={logo} className="stripe-logo"></img>
      </div>
 
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          {/* <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div> */}
          {/* <div className="col-md-7 order-md-1"> */}
          <div className="col-12 col-md-8 offset-md-2 ">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={745} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>
 
    </div>
  );
}
 
export default Checkout;