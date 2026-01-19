import type React from "react"
import styles123 from "./ToDoList.module.scss"
import { InputProp } from "./ToDoListInput"


export const ToDoList: React.FC = () => {

    return (
            <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
                <div className={styles123.ToDoList + " " + "ToDoList"}>
                    <InputProp></InputProp>
                </div>
            </div>
    )
}