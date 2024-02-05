import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { NavLink, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectError,
  selectIsLoading,
} from "../store/categories/category-selector";
import Loader from "../components/Loader";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "../store/categories/category-reducer";
import toast from "react-hot-toast";

function Shop() {
  const categories = useSelector(selectCategoriesMap);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch(fetchCategoriesStart());
      try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        toast.error(error.message);
        dispatch(fetchCategoriesFailed(error));
      }
    };

    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    fetchCategories();
  }, [dispatch]);

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
