import type React from "react"
import styles123 from "./ToDoList.module.scss"
import { Button } from "react-bootstrap"

export const ToDoListContent: React.FC = () => {
    return (
        <div className={styles123.content} >
            <div className={styles123.contentText + " " + "container-fluid"}>123
                <button className={styles123.contentButton} variant="primary">🗑️</button>
                <Button size="lg" className={styles123.contentButton} >🗑️</Button>
            </div>
        </div >
    )
}