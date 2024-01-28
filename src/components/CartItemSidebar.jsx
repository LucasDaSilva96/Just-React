import { useContext } from "react";
import { CartContext } from "../contexts/cart.contex";
import ShopItemSmallBox from "./ShopItemSmallBox";

function CartItemSidebar() {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  if (cartItems.length < 1)
    return <h1 className="text-center text-2xl">Empty</h1>;

  return (
    <div className="flex flex-col gap-3 px-2">
      {cartItems.map((item) => (
        <ShopItemSmallBox
          item={item}
          key={item.id}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      ))}
    </div>
  );
}

export default CartItemSidebar;
