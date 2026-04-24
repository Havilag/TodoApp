import { useNavigate, useOutletContext } from "react-router";
import styles from "./home.module.css"


export function Home() {

    const { tasks } = useOutletContext();
    const pending = tasks.filter(pendientes => !pendientes.completed).length;
    const completed = tasks.filter(pendientes => pendientes.completed).length;
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <header>
                <h1>Bienvenido al dashboard</h1>
            </header>

            <div className={styles["container-card"]}>
                <div className={styles.card}>
                    <span>{pending}</span>
                    <p>Pendientes por hacer</p>
                </div>

                <div className={styles.card}>
                    <span>{completed}</span>
                    <p>Pendientes Completados</p>
                </div>
            </div>

            <div className={styles["container-botton"]} onClick={() => navigate('/Todo')}>
                <button>Agregar Pendiente</button>
            </div>
        </div>
    );
}