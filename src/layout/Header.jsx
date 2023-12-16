import { Link } from "react-router-dom"
import { selectUserLogged,selectIsAdmin } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";


export const Header = () => {

  const logedUser = useSelector(selectUserLogged);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch()

  return (
    <div className="absolute top-0 left-0 z-[2000] flex w-full text-white pt-2 font-bold px-[5%] max-md:flex flex-col">
      <div className="flex items-center gap-5 mx-auto max-md:gap-3 max-[480px]:flex-col justify-center">
        <div className="flex gap-5 max-[480px]:gap-3">
          <Link className="text-center" to="/">Home</Link>
          <Link className="text-center" to="/villas">Villas</Link>
          <Link className="text-center" to="/about">About</Link>
          <Link className="text-center" to="/contact">Contact</Link>
        </div>
        {!logedUser &&
          <div className="flex items-center gap-5 max-[480px]:mx-auto max-[480px]:gap-3">
            <Link className="text-center" to="/login">Login</Link>
            <Link className="text-center" to="/register">Register</Link>
          </div>
        }
      </div>
      {logedUser &&
        <div className="absolute right-[5%] flex gap-5 max-md:static pt-3 mx-auto">
          {isAdmin == 1 ?
            <Link className="text-amber-700" to="/dashboard">Dashboard</Link>
          :
            <Link className="text-amber-700" to="/profile">Profile</Link>
          }
          <button onClick={()=>{dispatch(logoutUser())}}>Logout</button>
        </div>
      }
      
    </div>
  )
}
