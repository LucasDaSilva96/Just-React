import { useParams } from "react-router-dom";
import ShopItemBox from "./ShopItemBox";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/category-selector";

function SelectedCategoryContainer() {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);

  return (
    <div>
      <h1 className="px-4 pl-6 font-black text-3xl ">
        {category.toUpperCase()}
      </h1>

      <div className="w-full flex flex-wrap gap-4 px-4 py-2">
        {categories[category]?.map((item) => (
          <ShopItemBox data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SelectedCategoryContainer;
