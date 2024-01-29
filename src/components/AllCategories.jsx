import React, { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import ShopItemBox from "./ShopItemBox";

function AllCategories() {
  const { categories } = useContext(CategoriesContext);

  return (
    <React.Fragment>
      {Object.keys(categories).map((el) => (
        <React.Fragment key={el}>
          <h1 className="px-4 pl-6 font-black text-3xl ">{el.toUpperCase()}</h1>
          <div className="w-full flex flex-wrap gap-4 px-4 py-2">
            {categories[el].map(
              (item, i) => i < 4 && <ShopItemBox data={item} key={item.id} />
            )}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default AllCategories;
