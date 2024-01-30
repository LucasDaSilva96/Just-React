import { useContext } from "react";
import { CartContext } from "../contexts/cart.contex";
import ShopItemCheckOutBox from "../components/ShopItemCheckOutBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalCartPrice,
    removeSelectedCartItem,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (totalCartPrice < 1)
    return (
      <div className="flex flex-col gap-3 px-8">
        <h1 className="text-center text-2xl">Your cart is empty</h1>
        <Button buttonType="inverted" onClick={() => navigate("/shop")}>
          Go to the shop
        </Button>
      </div>
    );

  return (
    <div className="px-4 flex flex-col ">
      <h1 className="font-black text-3xl text-center pb-3">Checkout</h1>
      <div className=" max-h-[70dvh] overflow-y-scroll">
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
