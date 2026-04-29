import { LoginService } from "../services/auth-service";
import { AutheStore } from "../store/auth-store"


export const UseAuth = () => {

    const {token, setToken, logout} = AutheStore();   

    const login = async( {username, password}) =>{
        const token = await LoginService({username,password})
        setToken(token);
    } 

    return{
        token,
        login,
        logout,
        isAuthenticated: !!token,
    };
};