import { Button } from "react-bootstrap"
import styles123 from "./ToDoList.module.scss"

export const InputProp: React.FC = () => {
    return (
        <div className={styles123.inputProp}>
            <input className={styles123.input + " " + "position-relative"}></input>
            <Button size="sm" className={styles123.inputButton} variant="primary">Primary</Button>
        </div>
    )
}