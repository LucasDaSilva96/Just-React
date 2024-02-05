import { addItemToCart } from "../store/cart/cart-reducer";
import { cartItemsArray } from "../store/cart/cart-selector";

import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

function ShopItemBox({ data }) {
  const { imageUrl, name, price } = data;

  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsArray);

  return (
    <article className="max-w-[370px] transition-all hover:shadow-lg pb-2 flex flex-col gap-2 justify-between border-transparent hover:border-black border-2 py-2 px-2">
      <img
        src={imageUrl}
        alt={name}
        className="max-w-[350px] min-w-[300px] max-h-[300px]"
      />
      <div className="w-full flex justify-between">
        <h1 className="text-lg">{name}</h1>
        <span className="text-lg font-black">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => {
          dispatch(addItemToCart(data));
        }}
      >
        Add to cart
      </Button>
    </article>
  );
}

export default ShopItemBox;
