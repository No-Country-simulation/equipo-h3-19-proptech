import { Outlet } from "react-router-dom";
import Logo from "./dashboard/Logo";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";

export default function Main() {
  return (
    <div className="grid grid-cols-4 gap-x-2 mx-2 bg-[#fafafa]">
      <Logo />
      <Navbar />
      <Sidebar />
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  )
}
