import { useContext } from "react";
import Button from "./Button";
import CartItemSidebar from "./CartItemSidebar";
import { CartContext } from "../contexts/cart.contex";

function CartSidebar({ slide }) {
  const { totalCartPrice } = useContext(CartContext);
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
        <h2 className="mt-auto capitalize font-bold px-2 text-xl">
          total: {totalCartPrice}$
        </h2>
      )}

      <Button buttonType="inverted">Go to checkout</Button>
    </aside>
  );
}

export default CartSidebar;
