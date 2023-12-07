import {Navigate, Outlet} from 'react-router-dom';
import { selectIsAdmin,selectUserLogged } from "../redux/authSlice";
import { useSelector } from "react-redux";

export const AdminProtectedRoute = ({ redirectPath = '/',children, noAdminRedirectPath }) => {

    const logedUser = useSelector(selectUserLogged);
    const isAdmin = useSelector(selectIsAdmin);

    if(!logedUser){
        return <Navigate to={redirectPath} replace />;
    }

    if (!isAdmin) {
        return <Navigate to={noAdminRedirectPath} replace />;
    }
    
    return children ? children : <Outlet />;
}
