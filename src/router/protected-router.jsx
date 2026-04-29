import { Navigate, Outlet } from "react-router";
import { UseAuth } from "../app/auth/hooks/use-auth"


export const ProtectedRouter = () =>{
    const {isAuthenticated} = UseAuth();

    if(!isAuthenticated){
        return <Navigate to={"/login"} />;
    }

    return <Outlet />;
}