import { Outlet } from "react-router-dom";
import Logo from "@ui/Logo";
import Navbar from "@ui/CustomerNavbar";
import Sidebar from "./dashboard/Sidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getUserById } from "../../../services/user.js";

export default function Main() {

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserdata] = useState('')
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = user.id;
        if (userId) {
          const response = await getUserById(userId);
          setUserdata(response)
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [user]); // Se ejecuta cada vez que `user` cambie

  return (
    <main className="grid grid-cols-4 gap-x-2 mx-2 bg-[#fafafa]">
      <Logo />
      <Navbar user={{ src: "/assets/user.svg", role: "inversor" }} />
      <Sidebar />
      <section className="col-span-3">
        <Outlet />
      </section>
    </main>
  )
}
