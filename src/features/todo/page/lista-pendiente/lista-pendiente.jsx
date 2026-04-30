import { useOutletContext } from "react-router-dom";
import styles from "./lista-pendiente.module.css"

export function ListaPendiente() {

    const { tasks, deleteTask, taskState } = useOutletContext();

    const pendingtask = tasks.filter(task => !task.completed);


    return (
        <div className={styles.container}>
            <h2>Lista de pendientes</h2>

            {pendingtask.length === 0 ? (
                <p>No hay pendientes</p>
            ) : (
                <ul>
                    {pendingtask.map((task) => (
                        <li key={task}>
                            {task.text}
                            <div className={styles["container-button"]}>
                                <button onClick={() => deleteTask(task.id)}>
                                    ❌
                                </button>

                                <button onClick={() => taskState(task.id)}>
                                    ✔️
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}