import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./todo.module.css";



export function Todo() {

    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState("");
    const { addTask, tasks, deleteTask, editTask } = useOutletContext();

    const pendingTasks = () => {
        if (input.trim() === "") {
            return;
        }

        addTask(input);
        setInput("");
    }

    const taskSave = (id) =>{
        if(!newText.trim()){
            return;
        }
        editTask(id,newText);
        setEditId(null);
        setNewText("");
    };

    const taskEdit = (task) => {
        setEditId(task.id);
        setNewText(task.text);
    };

    return (
        <section className={styles.container}>
            <h1>Añadir pendientes</h1>
            <div className={styles.inputgroup}>
                <p>Nueva tarea:</p>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className={styles.button}>
                <button onClick={pendingTasks}>Agregar</button>
            </div>

            <ul className={styles.lista}>
                {tasks.length === 0 ? (
                    <p>No hay pendientes asignados</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className={styles.pendientes}>

                            {editId === task.id ? (
                                <>
                                    <input
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                    />

                                    <button onClick={() => taskSave(task.id)}>
                                        💾
                                    </button>
                                </>
                            ) : (
                                <>

                                    <span className={styles.text}>
                                        {task.text}
                                    </span>

                                    <div className={styles.action}>
                                        <button onClick={() => taskEdit(task)}>
                                            ✏️
                                        </button>

                                        <button onClick={() => deleteTask(task.id)}>
                                            ❌
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}

