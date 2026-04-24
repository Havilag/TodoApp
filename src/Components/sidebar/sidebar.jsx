import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { userSection } from "./user-section";

export function Sidebar() {

    const user = userSection((state) => state.user);

    return (
        <aside className={styles.container}>
            <div className={styles["container-title"]}>
                <h2>Navegation</h2>
            </div>

            <nav className={styles["container-nav"]}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="Todo">Todo</Link>
                        <Link to="Lista">Lista Pendiente</Link>
                        <Link to="Lista Terminada">Pendientes Terminados</Link>
                        <Link to="Pokemon">Pokemon</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.user}>
                <img src={user.avatar} alt="avatar" />
                <div className={styles.info}>
                    <p>{user.name}</p>
                    <span>{user.role}</span>
                </div>
            </div>
        </aside>

    );
}