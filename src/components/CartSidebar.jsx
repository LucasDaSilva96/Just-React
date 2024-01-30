import { useContext } from "react";
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
      className={`absolute top-0 right-0 transition-all backdrop-blur-2xl w-[375px] h-[100dvh] z-[100] bg-[#c9d6c9] ${
        !slide ? "translate-x-[1200px]" : "translate-x-0"
      } flex flex-col gap-4 overflow-y-scroll justify-between `}
    >
      <div className="w-full mt-[62px] max-h-[450px]  overflow-y-scroll">
        <CartItemSidebar />
      </div>

      {totalCartPrice > 0 && (
        <div className="w-full flex flex-col gap-2">
          <h2 className="capitalize font-bold px-2 text-xl">
            total: {totalCartPrice}$
          </h2>
          <Button buttonType="inverted" onClick={handleClick}>
            Go to checkout
          </Button>

          <Button buttonType="danger" onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      )}
    </aside>
  );
}

export default CartSidebar;

// bg-[#b7b9b2]
