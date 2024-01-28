import React, { useContext } from "react";
import Button from "./Button";
import CartItemSidebar from "./CartItemSidebar";
import { CartContext } from "../contexts/cart.contex";
import { useNavigate } from "react-router-dom";
import { ToggleCartContext } from "../contexts/toggleCartOpen.context";

function CartSidebar({ slide }) {
  const { totalCartPrice, clearCartItems } = useContext(CartContext);
  const { setOpen } = useContext(ToggleCartContext);
  const navigate = useNavigate();

  function handleClick() {
    navigate("checkout");
    setOpen(false);
  }

  function handleClearCart() {
    clearCartItems();
  }

  return (
    <aside
      className={`absolute top-0 right-0 transition-all bg-[#b7b9b2] backdrop-blur-xl w-[375px] min-h-[100dvh] z-[54] ${
        !slide ? "translate-x-[1200px]" : "translate-x-0"
      } flex flex-col gap-4 `}
    >
      <div className="w-full  mt-[62px] h-[500px] overflow-y-scroll">
        <CartItemSidebar />
      </div>

      {totalCartPrice > 0 && (
        <React.Fragment>
          <h2 className="mt-auto capitalize font-bold px-2 text-xl">
            total: {totalCartPrice}$
          </h2>
          <Button buttonType="inverted" onClick={handleClick}>
            Go to checkout
          </Button>
          <Button buttonType="danger" onClick={handleClearCart}>
            Clear cart
          </Button>
        </React.Fragment>
      )}
    </aside>
  );
}

export default CartSidebar;
