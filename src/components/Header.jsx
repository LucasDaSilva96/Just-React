import { Link, NavLink } from "react-router-dom";

import CartSidebar from "./CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user-selector";
import { cartCount, selectIsCartOpen } from "../store/cart/cart-selector";
import { setIsCartOpen } from "../store/cart/cart-reducer";

function Header() {
  const currentUser = useSelector(selectCurrentUser);

  const open = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const quantity = useSelector(cartCount);

  return (
    <header className="w-full flex items-center py-2 bg-[#a3b18a6c] px-2 shadow-md z-40 fixed backdrop-blur-md">
      <aside>
        <Link to="/">
          <img
            src="/img/clothe-page-icon.png"
            alt="logo"
            className="max-w-[45px] min-w-[30px]"
          />
        </Link>
      </aside>

      <nav className=" ml-[auto] pr-2 flex gap-6 items-center ">
        <NavLink to="shop" className="text-lg transition-all hover:underline ">
          Shop
        </NavLink>
        <NavLink
          to="contact"
          className="text-lg transition-all hover:underline"
        >
          Contact
        </NavLink>
        {!currentUser ? (
          <NavLink to="auth" className="text-lg transition-all hover:underline">
            Sign in
          </NavLink>
        ) : (
          <NavLink to="auth" className="text-lg transition-all">
            Dashboard
          </NavLink>
        )}
        <div
          className="text-lg transition-all z-[150] cursor-pointer"
          onClick={() => dispatch(setIsCartOpen())}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path>
            </svg>
            {quantity > 0 && (
              <span className="absolute top-[55%] right-[50%] translate-y-[-50%] translate-x-[50%] text-base font-semibold">
                {quantity}
              </span>
            )}
          </div>
        </div>
      </nav>
      <CartSidebar slide={open} />
    </header>
  );
}

export default Header;
