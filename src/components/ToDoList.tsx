import type React from "react"
import styles123 from "./ToDoList.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { useEffect, useState } from "react"


export const ToDoList: React.FC = () => {
    const [toDoListInput, setInput] = useState<any[]>([])
    //項目加入的變數，增減增減能夠改變此變數
    const TdlContent = toDoListInput.map((content, i) =>
        <ToDoListContent key={content} content={content} onClick={() => {
            setInput([
                ...toDoListInput.slice(0, i),
                ...toDoListInput.slice(i + 1, toDoListInput.length)
            ]);console.log(toDoListInput)
        }}>
        </ToDoListContent >
    )


    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => { setInput([...toDoListInput, input]) }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {TdlContent}
            </div>
        </div >
    )
}

//網頁有滾輪，不能剛好符合畫面大小