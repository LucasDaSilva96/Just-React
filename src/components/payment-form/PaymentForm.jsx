import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../Button";
import { useSelector } from "react-redux";
import { cartTotal } from "../../store/cart/cart-selector";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const total = useSelector(cartTotal);
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <div className="w-[375px] bg-[#a3b18a6c] rounded shadow flex flex-col gap-12 py-2 px-2">
      <h3 className="capitalize text-xl text-center underline">
        Credit card payment
      </h3>
      <form className="flex flex-col gap-12">
        <CardElement className="py-2 border-b-2 border-black" />
        <Button buttonType="inverted">
          Pay now: <span className="underline font-black">${total}</span>
        </Button>
      </form>
    </div>
  );
}

export default PaymentForm;
