import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="w-full min-h-[100dvh] bg-[#dad7cd] flex flex-col gap-3">
      <Header />

      <div className="mt-[80px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
