import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardModal from "./AddCardModal";

const stripePromise = loadStripe(
  "sk_test_51NGCbmAoQDXAm3fxJ8T4w6OSbibHDgeP455X8r4ue4c4hfNq4rBbDrNW2GSJ3C1vc1PTT82JxE3HzalBjTLujb5900NlyQSUZp"
);

const StripePaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <AddCardModal show={props.show} hide={props.onHide} {...props} />
  </Elements>
);
export default StripePaymentForm;
