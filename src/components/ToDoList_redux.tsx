import type React from "react"
import styles123 from "./ToDoList_redux.module.scss"
import { InputProp } from "./ToDoListInput_redux"
import { ToDoListContent } from "./ToDoListContent_redux"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export const ToDoList: React.FC = () => {
    const [toDoList, setToDoList] = useState<{ id: string, content: string }[]>([])
    //項目加入的變數，增減增減能夠改變此變數
    const TdlContent = toDoList.map((todo, i) =>
        <ToDoListContent key={todo.id} content={todo.content} onClick={() => {
            setToDoList([
                ...toDoList.slice(0, i),
                ...toDoList.slice(i + 1, toDoList.length)
            ]); console.log(toDoList)
        }}>
        </ToDoListContent >
    )


    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => { setToDoList([...toDoList, { id: uuidv4(), content: input as string }]) }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {TdlContent}
            </div>
        </div >
    )
}

//網頁有滾輪，不能剛好符合畫面大小