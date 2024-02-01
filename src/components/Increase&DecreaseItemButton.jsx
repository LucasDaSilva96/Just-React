import { useDispatch, useSelector } from "react-redux";
import { cartItemsArray } from "../store/cart/cart-selector";
import { CART_ACTION_TYPES } from "../store/cart/cart-types";

function Increase_DecreaseItemButton({ item, handler, children }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsArray);
  return (
    <button
      onClick={() =>
        dispatch({
          type: CART_ACTION_TYPES.SET_CART_ITEMS,
          payload: handler(cartItems, item),
        })
      }
      className={
        children === "+"
          ? "py-1 text-slate-100 px-2 bg-black rounded"
          : "py-1 text-slate-100 px-[11px] bg-black rounded"
      }
    >
      {children}
    </button>
  );
}

export default Increase_DecreaseItemButton;
