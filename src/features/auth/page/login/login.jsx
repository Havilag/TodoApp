import { useNavigate } from "react-router";
import { UseAuth } from "../../hooks/use-auth"
import { useState } from "react";
import styles from "./login.module.css"

export const Login = () => {

    const { login } = UseAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
    })


    const handleSubmit = async (e) =>{
            e.preventDefault();

            try{
                await login({username: form.username, password: form.password});
                navigate("/");
            }
            catch{
                alert("Username or password are incorrects")
            }
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles["header-from"]}>
                <h1>Login</h1>
            </div>

            <input placeholder="Username" 
            className={styles.username} 
            onChange={(e) => setForm({...form, username: e.target.value})}/>

            <input placeholder="password" type="password"
            className={styles.password} 
            onChange={(e) => setForm({...form, password: e.target.value})}/>

            <button className={styles.submit}>
                Submit
            </button>

        </form>
    );
}