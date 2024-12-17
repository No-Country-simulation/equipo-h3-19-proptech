import { Outlet } from "react-router-dom";
import Logo from "../dashboard/Logo";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

export default function InversorDashboard() {
  return (
    <div className="grid grid-cols-4 gap-1">
      <Logo />
      <Navbar />
      <Sidebar />
      <div className="col-span-3 border-2 border-red-500">
        <Outlet />
      </div>
    </div>
  )
}
