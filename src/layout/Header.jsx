import { Link } from "react-router-dom"
import { selectUserLogged,selectIsAdmin } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

export const Header = () => {

  const logedUser = useSelector(selectUserLogged);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();

  return (
    <div className="absolute top-0 left-0 z-[2000] flex w-full text-white pt-2 font-bold px-[5%]">
      <div className="flex gap-5 mx-auto">
        <Link to="/">Home</Link>
        <Link to="/villas">Villas</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!logedUser &&
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        }
      </div>
      {logedUser &&
        <div className="absolute right-[5%] flex gap-5">
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
