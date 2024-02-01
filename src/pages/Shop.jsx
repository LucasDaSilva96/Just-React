import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { NavLink, Outlet } from "react-router-dom";
import { setCategoriesArray } from "../store/categories/category-action";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/category-selector";

function Shop() {
  const categories = useSelector(selectCategoriesMap);

  const dispatch = useDispatch();

  useEffect(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();

      setCategoriesArray(categoriesArray, dispatch);
    };
    getCategoriesMap();
  }, [dispatch]);

  if (!categories) return <h1 className="text-3xl font-bold">Empty</h1>;

  return (
    <section>
      <div className="w-full flex flex-wrap items-center gap-4 px-6 pt-2 pb-8 capitalize">
        <NavLink to="/shop" end className="underline text-lg">
          Start
        </NavLink>
        {Object.keys(categories).map((el) => (
          <NavLink key={el} to={el.toLowerCase()} className="underline text-lg">
            {el}
          </NavLink>
        ))}
      </div>

      <Outlet />
      <ScrollToTopButton />
    </section>
  );
}

export default Shop;
