import type React from "react"
import styles123 from "./ToDoList_redux.module.scss"
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
                <Button onClick={onClick} size="sm" className={styles123.contentButton + " " + styles123.deleteBtn} >🗑️</Button>
            </div >
        </Fragment >
    )
}