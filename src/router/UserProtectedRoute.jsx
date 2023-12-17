import {Navigate, Outlet} from 'react-router-dom';
import { selectIsAdmin,selectUserLogged } from "../redux/authSlice";
import { useSelector } from "react-redux";

export const UserProtectedRoute = ({ redirectPath = '/',children }) => {
    const logedUser = useSelector(selectUserLogged);
    const isAdmin = useSelector(selectIsAdmin);

    if(!logedUser){
        return <Navigate to={redirectPath} replace />;
    }

    if (isAdmin != 0) {
        return <Navigate to="/" replace />;
    }
    
    return children ? children : <Outlet />;
}

