import { useContext } from "react";

import ShopItemBox from "../components/ShopItemBox";
import { ProductContext } from "../contexts/products.context";

function Shop() {
  const { products } = useContext(ProductContext);

  if (!products) return <h1 className="text-3xl font-bold">Loading...</h1>;

  return (
    <div className="">
      <h1 className="px-4 font-black text-2xl">Category</h1>
      <div className="w-full flex flex-wrap gap-4 px-4 py-2">
        {products.map((item) => (
          <ShopItemBox data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
