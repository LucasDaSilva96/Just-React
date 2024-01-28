function ShopItemSmallBox({ item, addItemToCart, removeItemFromCart }) {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <article className="flex bg-[#cecece]">
      <img src={imageUrl} name={name} className="max-w-[80px]" />

      <div className="ml-[60px] flex gap-6">
        <div className="self-center">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-center text-lg">{price}$</p>
        </div>
        <div className="flex items-center gap-4">
          <DecreaseItemButton
            item={item}
            removeItemFromCart={removeItemFromCart}
          />
          <p>{quantity}</p>
          <IncreaseItemButton item={item} addItemToCart={addItemToCart} />
        </div>
      </div>
    </article>
  );
}

function IncreaseItemButton({ item, addItemToCart }) {
  return <button onClick={() => addItemToCart(item)}>+</button>;
}

function DecreaseItemButton({ item, removeItemFromCart }) {
  return <button onClick={() => removeItemFromCart(item)}>-</button>;
}

export default ShopItemSmallBox;
