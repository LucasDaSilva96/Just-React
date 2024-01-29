import { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { NavLink, Outlet } from "react-router-dom";

function Shop() {
  const { categories } = useContext(CategoriesContext);

  if (!categories) return <h1 className="text-3xl font-bold">Empty</h1>;

  return (
    <section>
      <div className="w-full flex flex-wrap items-center gap-4 px-6 pt-2 pb-8 capitalize">
        <NavLink to="/shop" end className="underline text-lg">
          All
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
