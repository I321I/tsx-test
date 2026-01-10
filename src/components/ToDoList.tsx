import type React from "react"
import styles123 from "./ToDoList.module.css"

export const ToDoList: React.FC = () => {
    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                123
            </div>
        </div>
    )
}