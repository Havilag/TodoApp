import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";
import styles from "./dashboard-layout.module.css"
import { useState } from "react";
import { useTask } from "../hooks/tasks";

export function DashboardLayout() {

    const taskState = useTask();

    return(
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet context={taskState}/>
            </main>
        </div>
    )
}