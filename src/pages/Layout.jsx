import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <main className="w-full min-h-[100dvh] bg-[#dad7cd] flex flex-col gap-3">
      <Header />

      <div className="mt-[80px]">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
