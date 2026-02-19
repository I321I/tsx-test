import type React from "react"
import styles123 from "./ToDoList_redux.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { v4 as uuidv4 } from 'uuid';
import { useRootDispatch, useRootSelector } from "../store/StoreConfigure"
import { addTodo, removeTodo } from "../store/todoList"


export const ToDoList: React.FC = () => {
    const todo = useRootSelector((store) => store.todoListReducer.todoListState)
    const dispatch = useRootDispatch()
    //項目加入的變數，增減增減能夠改變此變數
    const TdlContent = todo.map((todo) =>
        <ToDoListContent key={todo.id} content={todo.content} onClick={() => {
            dispatch(removeTodo(todo))
        }}>
        </ToDoListContent >
    )


    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => { dispatch(addTodo({ id: uuidv4(), content: input as string })) }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {TdlContent}
            </div>
        </div >
    )
}

//網頁有滾輪，不能剛好符合畫面大小