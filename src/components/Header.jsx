import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex items-center py-2 bg-[#a3b18a6c] px-2 shadow-md">
      <aside>
        <img
          src="/img/clothe-page-icon.png"
          alt="logo"
          className="max-w-[50px] min-w-[30px]"
        />
      </aside>

      <nav className=" ml-[auto] pr-2 flex gap-4">
        <NavLink className="text-lg transition-all hover:underline">
          Shop
        </NavLink>
        <NavLink className="text-lg transition-all hover:underline">
          Contact
        </NavLink>
        <NavLink className="text-lg transition-all hover:underline">
          Sign in
        </NavLink>
        <NavLink className="text-lg transition-all">cart 4</NavLink>
      </nav>
    </header>
  );
}

export default Header;
