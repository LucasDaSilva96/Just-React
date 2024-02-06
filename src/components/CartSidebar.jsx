import Button from "./Button";
import CartItemSidebar from "./CartItemSidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../store/cart/cart-selector";
import { clearCart, setIsCartOpen } from "../store/cart/cart-reducer";

function CartSidebar({ slide }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(cartTotal);

  function handleClick() {
    navigate("checkout");
    dispatch(setIsCartOpen());
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <aside
      className={`absolute top-0 right-0 transition-all backdrop-blur-2xl w-[375px] h-[100dvh] z-[100] bg-neutral-100  ${
        !slide ? "translate-x-[1200px]" : "translate-x-0"
      } flex flex-col gap-4 overflow-y-scroll justify-between `}
    >
      <div className="w-full mt-[62px] max-h-[70dvh]  overflow-y-scroll">
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

// bg-[#c9d6c9]
