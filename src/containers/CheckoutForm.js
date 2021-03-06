import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { stripePaymentMethodHandler } from "./script";
const API_ENDPOINT = "https://eazybe.com/api/v1/whatzapp/payVerify";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    setErrorMsg("");

    const paymentMethodObj = {
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name,
        email,
      },
    };
    const paymentMethodResult = await stripe.createPaymentMethod(
      paymentMethodObj
    );

    stripePaymentMethodHandler(
      {
        result: paymentMethodResult,
        amount: props.amount,
      },
      handleServerResponse
    );
  };

  // callback method to handle the response
  const handleServerResponse = async (response) => {
    if (response.error) {
      // Show error from server on payment form
    } else if (response.requires_action) {
      // Use Stripe.js to handle the required card action
      const { error: errorAction, paymentIntent } =
        await stripe.handleCardAction(response.payment_intent_client_secret);

      if (errorAction) {
        // Show error from Stripe.js in payment form
        setLoading(false);
        setErrorMsg(errorAction);
      } else {
        // The card action has been handled
        // The PaymentIntent can be confirmed again on the server
        console.log(paymentIntent);

        const serverResponse = await fetch(`${API_ENDPOINT}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            payment_intent_id: paymentIntent.id,
            mobile: localStorage.getItem("mobile").toString(),
            amount: props.amount,
          }),
        });
        handleServerResponse(await serverResponse.json());
      }
    } else {
      // Show success message
      fbqEventCatcher("Purchase");
      setLoading(false);
      props.setPaymentCompleted(response.success ? true : false);
    }
  };

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Pay with card</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-email">Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-number">Card Number</label>
            <CardNumberElement
              id="cc-number"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiry">Expiration Date</label>
            <CardExpiryElement
              id="expiry"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
              id="cvc"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? (
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            ></div>
          ) : (
            `PAY $${props.amount / 100}`
          )}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
    </React.Fragment>
  );
}

function fbqEventCatcher(event) {
  var imgFb = document.getElementById("analytics");
  console.log(imgFb);
  if (imgFb) {
    imgFb.src = `https://www.facebook.com/tr?id=577091703261048&ev=${event}&noscript=1`;
  } else {
    var fbpixImg = document.createElement("noscript");
    imgFb = document.createElement("img");
    imgFb.setAttribute("id", "analytics");
    imgFb.height = 1;
    imgFb.width = 1;
    imgFb.style.display = "none";
    imgFb.src = `https://www.facebook.com/tr?id=577091703261048&ev=${event}&noscript=1`;
    fbpixImg.append(imgFb);

    document.getElementsByTagName("head")[0].append(fbpixImg);
  }
}
