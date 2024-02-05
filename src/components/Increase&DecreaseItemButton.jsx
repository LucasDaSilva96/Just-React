import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cart/cart-reducer";

function Increase_DecreaseItemButton({ item, children, type }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        type === "add"
          ? dispatch(addItemToCart(item))
          : dispatch(removeItemFromCart(item))
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
