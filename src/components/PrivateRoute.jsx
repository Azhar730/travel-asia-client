import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="text-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;