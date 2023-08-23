import React, { useEffect, useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import Modal from "react-bootstrap/Modal";
import "./addCard.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { buyCredit } from "../../Redux/credits/actions";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../Redux/actions";
import Visa from "../../assets/images/visa.jpg";
import MasterCrd from "../../assets/images/mastercard.jpg";
import Amex from "../../assets/images/amex.jpg";

const useOptions = () => {
  const fontSize = "18px";
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const AddCardModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedCredit } = props;
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const { name } = useSelector((s) => s.User?.userProfile);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (payload?.error) {
      toast.error(payload?.error?.message);
    } else if (payload?.paymentMethod) {
      const callback = (res) => {
        if (res.error === false) {
          toast.success(res?.message);
          props.hide();
          navigate("/credits");
        } else {
          toast.error(res?.message);
        }
      };
      const data = {
        uid: selectedCredit?.uid,
        paymentMethodId: payload?.paymentMethod?.id,
      };
      dispatch(buyCredit(data, callback));
    }
  };

  // const handleCardNumberChange = (event) => {
  //   const cardNumberElement = elements.getElement(CardNumberElement);
  //   console.log(cardNumberElement, "cardNumber");
  // };
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon demoPickerWrapper credit-popup"
    >
      <Modal.Header closeButton onHide={props.hide}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-capitalize heading-credit-pop"
        >
          Billed under the name - {name}
        </Modal.Title>
        {/* <Button onClick={props.hide} className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
              fill="black"
            />
          </svg>
        </Button> */}
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="car-number-cvc d-flex justify-content-between gap-2">
            <label className="crd-nmber-field">
              Card number
              <CardNumberElement
                options={options}
                // onChange={handleCardNumberChange}
              />
            </label>
            <label className="cv-field">
              CVC
              <CardCvcElement options={options} />
            </label>
          </div>
          <div className="expire-image-field d-flex align-items-center justify-content-between">
            <label>
              Expiration date
              <CardExpiryElement options={options} />
            </label>
            <div className="images-payment-stripe d-flex flex-wrap align-items-center gap-2">
              <img src={Visa} />
              <img src={MasterCrd} />
              <img src={Amex} />
            </div>
          </div>
          <button type="submit" disabled={!stripe} className="payBtn">
            Pay
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCardModal;
