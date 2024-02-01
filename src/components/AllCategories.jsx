import React from "react";
import ShopItemBox from "./ShopItemBox";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/category-selector";

function AllCategories() {
  const categories = useSelector(selectCategoriesMap);

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
