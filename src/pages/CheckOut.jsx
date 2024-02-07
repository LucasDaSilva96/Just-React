import ShopItemCheckOutBox from "../components/ShopItemCheckOutBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItemsArray, cartTotal } from "../store/cart/cart-selector";
import PaymentForm from "../components/payment-form/PaymentForm";
import React from "react";

function CheckOut() {
  const navigate = useNavigate();
  const totalCartPrice = useSelector(cartTotal);
  const cartItems = useSelector(cartItemsArray);

  if (totalCartPrice < 1)
    return (
      <div className="flex flex-col gap-3 px-8">
        <h1 className="text-center text-2xl">Your cart is empty</h1>
        <Button buttonType="inverted" onClick={() => navigate("/shop")}>
          Go to the shop
        </Button>
      </div>
    );

  return (
    <React.Fragment>
      <h1 className="font-black text-3xl text-center pb-3">Checkout</h1>
      <div className="w-full flex flex-wrap justify-around py-2">
        <div className="px-4 flex flex-col min-w-[375px] ">
          <div className=" max-h-[60dvh] overflow-y-scroll">
            {cartItems.map((item) => (
              <ShopItemCheckOutBox item={item} key={item.id} />
            ))}
          </div>
          <h2 className=" capitalize font-black text-xl py-4 underline">
            Amount to pay: ${totalCartPrice}
          </h2>
        </div>
        <PaymentForm />
      </div>
    </React.Fragment>
  );
}

export default CheckOut;
