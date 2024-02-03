import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { NavLink, Outlet } from "react-router-dom";
import { fetchCategoriesAsync } from "../store/categories/category-action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectError,
  selectIsLoading,
} from "../store/categories/category-selector";
import Loader from "../components/Loader";

function Shop() {
  const categories = useSelector(selectCategoriesMap);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  console.log(error);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <h1 className="text-4xl font-bold text-center">
        Something went wrong... <br /> Error: {error}
      </h1>
    );

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
