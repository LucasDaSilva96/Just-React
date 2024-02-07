import Increase_DecreaseItemButton from "./Increase&DecreaseItemButton";

function ShopItemSmallBox({ item }) {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <article className="flex gap-6 bg-transparent rounded overflow-hidden border border-black py-1 px-1 shadow-md">
      <img src={imageUrl} name={name} className="max-w-[80px] rounded" />

      <div className=" flex gap-6 w-full pr-2">
        <div className="self-center">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-center text-lg font-bold">{price}$</p>
        </div>
        <div className="flex items-center ml-auto">
          <Increase_DecreaseItemButton item={item}>
            -
          </Increase_DecreaseItemButton>
          <p className="py-1 px-2 bg-white ">{quantity}</p>
          <Increase_DecreaseItemButton item={item} type="add">
            +
          </Increase_DecreaseItemButton>
        </div>
      </div>
    </article>
  );
}

export default ShopItemSmallBox;
