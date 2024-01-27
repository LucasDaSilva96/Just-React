import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";

function Header() {
  const { currentUser } = useContext(UserContext);
  const [hasItem, setItems] = useState(true);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <header className="w-full flex items-center py-2 bg-[#a3b18a6c] px-2 shadow-md">
      <aside>
        <Link to="/">
          <img
            src="/img/clothe-page-icon.png"
            alt="logo"
            className="max-w-[45px] min-w-[30px]"
          />
        </Link>
      </aside>

      <nav className=" ml-[auto] pr-2 flex gap-6 items-center">
        <NavLink className="text-lg transition-all hover:underline">
          Shop
        </NavLink>
        <NavLink className="text-lg transition-all hover:underline">
          Contact
        </NavLink>
        {!currentUser ? (
          <NavLink to="auth" className="text-lg transition-all hover:underline">
            Sign in
          </NavLink>
        ) : (
          <NavLink
            to="auth"
            className="text-lg transition-all hover:underline"
            onClick={signOutHandler}
          >
            Sign out
          </NavLink>
        )}
        <NavLink className="text-lg transition-all">
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
            {hasItem && (
              <span className="absolute top-[10px] left-[14px] text-base font-semibold">
                1
              </span>
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
