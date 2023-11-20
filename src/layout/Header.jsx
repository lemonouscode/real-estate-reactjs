import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="flex gap-5 w-full justify-center">
      <Link to="/">Home</Link>
      <Link to="/create-villa">Add Villa</Link>
      <Link to="/villas">Villas</Link>
    </div>
  )
}
