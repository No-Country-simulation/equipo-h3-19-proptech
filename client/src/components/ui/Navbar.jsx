import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";



export default function Navbar() {
  return (
    <div className="px-10 w-full text-colorPrimary">
      <Link to='/' className="flex gap-2 ">
        <div className="text-5xl"><IoChevronBackSharp /></div>
        <h1 className="flex items-center font-semibold">Volver al inicio</h1>
      </Link>
    </div>
  )
}
