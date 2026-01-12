import type React from "react"
import styles123 from "./ToDoList.module.css"
import { Form, InputGroup } from "react-bootstrap"

const InputProp: React.FC = () => {
    return (
        <input className="position-relative"></input>
    )
}

export const ToDoList: React.FC = () => {

    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp></InputProp>
                <InputProp></InputProp>
            </div>
        </div>
    )
}