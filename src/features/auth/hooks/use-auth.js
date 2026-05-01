import { LoginService } from "../services/auth-service";
import { AuthenticationStore } from "../store/auth-store"


export const UseAuth = () => {

    const {accessToken, setToken, logout} = AuthenticationStore();   

    const login = async( {username, password}) =>{
        const tokenRecovered = await LoginService({username,password})
        setToken(tokenRecovered);
    } 

    return{
        accessToken,
        login,
        logout,
        isAuthenticated: !!accessToken,
    };
};