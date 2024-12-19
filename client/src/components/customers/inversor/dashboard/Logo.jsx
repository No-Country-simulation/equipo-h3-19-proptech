import { Link } from "react-router-dom";

export default function Logo () {
  return (
    <Link to='/' className="flex items-center justify-center h-14 gap-8">
      <img src="/logo-blanco.svg" alt="logo" />
      <span className="font-normal text-base text-colorSecondary">Financial Land</span>
    </Link>
  )
}
