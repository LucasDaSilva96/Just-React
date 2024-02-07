import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../../store/cart/cart-selector";
import { Form, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { selectCurrentUser } from "../../store/user/user-selector";
import { useState } from "react";
import { clearCart } from "../../store/cart/cart-reducer";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(cartTotal);
  const { displayName } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  console.log(displayName);
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsLoading(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName ? displayName : "Guest",
        },
      },
    });

    setIsLoading(false);

    if (paymentResult.error) {
      toast.error(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment Successful");
      }
    }
    dispatch(clearCart());
    navigate(`/confirmation/${amount}`, {
      state: { currentUser: displayName ? displayName : "Guest" },
    });
  };

  return (
    <div className="w-[375px] bg-[#a3b18a6c] rounded shadow flex flex-col gap-12 py-2 px-2">
      <h3 className="capitalize text-xl text-center underline">
        Credit card payment
      </h3>
      <Form className="flex flex-col gap-12" onSubmit={paymentHandler}>
        <CardElement className="py-2 border-b-2 border-black" />
        <Button buttonType="inverted" isLoading={isLoading}>
          Pay now:{" "}
          <span className=" ml-2 underline font-black"> ${amount}</span>
        </Button>
      </Form>
    </div>
  );
}

export default PaymentForm;
