import { Outlet } from "react-router-dom";
import Logo from "@ui/Logo";
import Navbar from "@ui/CustomerNavbar";
import Sidebar from "./dashboard/Sidebar";

export default function Main() {
  return (
    <div className="grid grid-cols-4 gap-x-2 mx-2 bg-[#fafafa]">
      <Logo />
      <Navbar user={{src: "/assets/user-1.svg", role: "borrower"}} />
      <Sidebar />
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  )
}
