import { useOutletContext } from "react-router-dom"
import styles from "./lista-realizada.module.css"

export function ListaRealizada() {

    const { tasks, deleteTask } = useOutletContext();
    const completedTask = tasks.filter(task => task.completed);

    return (
        <section className={styles.container}>
            <h1>Pendientes terminados</h1>

            <ul className={styles.lista}>
                {completedTask.length === 0 ? (
                    <p>No hay pendientes terminados</p>
                ) : (
                    completedTask.map(task => (
                        <li key={task.id} className={styles.item}>
                            <span className={styles.text}>
                                {task.text}
                            </span>
                            <button onClick={() => deleteTask(task.id)}>
                                ❌
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}