import ShopItemSmallBox from "./ShopItemSmallBox";
import { useSelector } from "react-redux";
import { cartItemsArray } from "../store/cart/cart-selector";
import { addCartItem, removeItem } from "../store/cart/cart-action";

function CartItemSidebar() {
  const cartItems = useSelector(cartItemsArray);
  console.log(cartItems);

  if (cartItems?.length < 1)
    return <h1 className="text-center text-2xl">Your cart is empty</h1>;

  return (
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
  );
}

export default CartItemSidebar;
