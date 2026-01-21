import type React from "react"
import styles123 from "./ToDoList.module.scss"
import { Button } from "react-bootstrap"
import { Fragment } from "react"
interface ToDoListContent {
    content: string | number
    onClick: () => void
}

export const ToDoListContent: React.FC<ToDoListContent> = ({ content, onClick }) => {
    return (
        <Fragment>
            <div className={styles123.contentBlock}></div>
            <div className={styles123.content + " container-fluid"} >
                <div style={{ fontSize: "larger" }} className={styles123.contentText}>{content}</div>
                <Button onClick={onClick} style={{ backgroundColor: "#1D1BA3", borderColor: "#1D1BA3" }} size="sm" className={styles123.contentButton} >🗑️</Button>
            </div >
        </Fragment>
    )
}