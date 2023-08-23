import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardModal from "./AddCardModal";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY);

const StripePaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <AddCardModal show={props.show} hide={props.onHide} {...props} />
  </Elements>
);
export default StripePaymentForm;
