import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-[2000] flex gap-5 w-full justify-center text-white pt-2 font-bold">
      <Link to="/">Home</Link>
      <Link to="/create-villa">Add Villa</Link>
      <Link to="/villas">Villas</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
