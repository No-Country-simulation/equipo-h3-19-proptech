import { Outlet } from "react-router-dom";

export default function Inversor () {
  return (
    <div className="w-screen h-screen bg-background text-foreground">
      <Outlet />
    </div>
  )
}
