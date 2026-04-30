import { useState } from "react";
import { compile } from "tailwindcss";


export function useTask() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        setTasks(prev => [...prev, {
            id: Date.now(),
            text: text,
            completed: false
        }
        ]);
    };

    const taskState = (id) => {
        setTasks((prevTask) => {
            return prevTask.map((task) => {
                if(task.id === id){
                    return{
                        ...task,
                        completed: !task.completed
                    };
                } else {
                    return task;
                }
            });
        });
    };

    const editTask = (id, newText) =>{
        setTasks(prev => 
            prev.map(task => {
                if(task.id === id){
                    return{
                        ...task, text: newText
                    };
                    }else{
                        return task;
                    }
                })
        );
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return {
        tasks,
        addTask,
        deleteTask,
        taskState,
        editTask
    };
}