import { Outlet } from "react-router-dom";
import Login from "../../components/auth/Login";
import Navbar from '../../components/ui/Navbar';


export default function Auth () {
  return (
    <div className="w-full h-screen bg-background text-foreground">
      <Outlet />
    </div>
  )
}
