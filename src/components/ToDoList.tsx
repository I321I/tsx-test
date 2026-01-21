import type React from "react"
import styles123 from "./ToDoList.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { useState } from "react"


export const ToDoList: React.FC = () => {
    const [toDoListInput, setInput] = useState<number | string>()
    let TdlContent = 123
    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => { setInput(input), console.log(toDoListInput) }}></InputProp>
                <div className={styles123.inputBlock}></div>
                <ToDoListContent content="content" onClick={() => { }}></ToDoListContent>
            </div>
        </div >
    )
}

//網頁有滾輪，不能剛好符合畫面大小