import Button from "./Button";
import { signOutUser } from "../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemsArray,
  cartTotal,
  selectIsCartOpen,
} from "../store/cart/cart-selector";
import { NavLink, useNavigate } from "react-router-dom";
import ShopItemSmallBox from "./ShopItemSmallBox";
import { addCartItem, removeItem } from "../store/cart/cart-action";
import React from "react";
import { setIsCartOpen } from "../store/cart/cart-reducer";

function Dashboard() {
  const cartItems = useSelector(cartItemsArray);
  const totalCartPrice = useSelector(cartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  function handleClick() {
    navigate("/checkout");
    if (isCartOpen) {
      dispatch(setIsCartOpen());
    }
  }

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <section className="w-full flex items-center flex-col justify-center">
      <h1 className="text-2xl font-black text-center">Welcome</h1>
      <div className="flex  flex-col justify-center gap-4">
        {cartItems?.length < 1 && (
          <NavLink to="/shop">
            <h1 className="text-center text-xl py-4 underline text-sky-900">
              → Your cart is empty. Just React to your new style journey now! ←
            </h1>
          </NavLink>
        )}

        {cartItems?.length > 0 && (
          <React.Fragment>
            <h2 className="text-center text-lg pt-8 pb-4 underline">
              Your cart: ${totalCartPrice}
            </h2>
            <div className="max-h-[50dvh] overflow-y-scroll py-2">
              <div className="flex flex-col gap-3 px-2">
                {cartItems?.map((item) => (
                  <ShopItemSmallBox
                    item={item}
                    key={item.id}
                    addItemToCart={addCartItem}
                    removeItemFromCart={removeItem}
                  />
                ))}
              </div>
            </div>
          </React.Fragment>
        )}

        <Button buttonType="inverted" onClick={handleClick}>
          Go to checkout
        </Button>

        <Button buttonType="danger" onClick={signOutHandler}>
          Log out
        </Button>
      </div>
    </section>
  );
}

export default Dashboard;
