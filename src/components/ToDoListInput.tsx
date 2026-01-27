import { Button } from "react-bootstrap"
import styles123 from "./ToDoList.module.scss"
import { useEffect, useState } from "react"
interface InputProp {
    onClick: (input: string | number | undefined) => void
}

export const InputProp: React.FC<InputProp> = ({ onClick }) => {
    const [input, setInput] = useState<string | number | undefined>()

    return (
        <div className={styles123.inputProp} >
            <input value={input} onChange={(event) => { setInput(event.target.value) }} className={styles123.input}></input>
            <Button onClick={() => { onClick(input), setInput("") }} style={{ fontSize: "larger" }} size="sm" className={styles123.inputButton} variant="primary">Add</Button>
        </div >
    )
}