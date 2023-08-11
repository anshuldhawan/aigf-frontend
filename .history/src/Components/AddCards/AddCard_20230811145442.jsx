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
  "pk_test_51MROZAEYe0sdvS9pSSKhmlZeXDN4DwMd0j4Te95RVrmauAllZYl8uibMPFRFUJQNSwWLPs0yl8oU2jVC1bj4htox003OZTJ2yu"
);

const StripePaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <AddCardModal show={props.show} hide={props.onHide} {...props} />
  </Elements>
);
export default StripePaymentForm;
