import { useDispatch } from "react-redux";
import Button from "./Button";
import Increase_DecreaseItemButton from "./Increase&DecreaseItemButton";
import { removeSelectedItemFromCart } from "../store/cart/cart-reducer";

function ShopItemCheckOutBox({ item }) {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <article className="flex gap-6 py-4 overflow-hidden border-b-2 min-w-[300px]  max-w-[800px] relative">
      <img src={imageUrl} name={name} className="max-w-[150px] rounded " />

      <div className=" flex gap-6 w-full items-center justify-evenly ">
        <h1 className="font-bold text-lg ">{name}</h1>

        <div className="flex items-center ">
          <Increase_DecreaseItemButton item={item}>
            -
          </Increase_DecreaseItemButton>
          <p className="py-1 px-2 bg-white ">{quantity}</p>
          <Increase_DecreaseItemButton item={item} type="add">
            +
          </Increase_DecreaseItemButton>
        </div>
      </div>
      <div className="absolute bottom-2 right-0 flex items-center gap-4">
        <p className="font-bold text-xl">
          ${price} x {quantity}
        </p>
        <Button
          buttonType="danger"
          onClick={() => dispatch(removeSelectedItemFromCart(item))}
        >
          remove
        </Button>
      </div>
    </article>
  );
}

export default ShopItemCheckOutBox;
