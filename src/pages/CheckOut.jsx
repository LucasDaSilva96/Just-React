import { useContext } from "react";
import { CartContext } from "../contexts/cart.contex";
import ShopItemCheckOutBox from "../components/ShopItemCheckOutBox";

function CheckOut() {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalCartPrice,
    removeSelectedCartItem,
  } = useContext(CartContext);

  if (totalCartPrice < 1)
    return <h1 className="text-center text-2xl">Empty</h1>;

  return (
    <div className="px-4 flex flex-col ">
      <h1 className="font-black text-3xl text-center pb-3">Checkout</h1>
      <div className=" max-h-[500px] overflow-y-scroll">
        {cartItems.map((item) => (
          <ShopItemCheckOutBox
            item={item}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            removeSelectedCartItem={removeSelectedCartItem}
            key={item.id}
          />
        ))}
      </div>
      <h2 className=" capitalize font-black text-xl py-4 underline">
        Amount to pay: ${totalCartPrice}
      </h2>
    </div>
  );
}

export default CheckOut;
