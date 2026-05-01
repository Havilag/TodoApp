import axios from "axios";


const API = "https://fakestoreapi.com/auth/login";

export const LoginService = async ({ username, password }) => {
    const response = await axios.post(API, {        
        username,
        password,
        
    });

    const accesToken = response.data.token;
    return accesToken;
}