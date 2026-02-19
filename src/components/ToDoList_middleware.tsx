import type React from "react"
import styles123 from "./ToDoList_redux.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { v4 as uuidv4 } from 'uuid';
import { useAddTodoMutation, useGetTodosQuery, useRemoveTodoMutation } from "../store/CreateApi";

export const ToDoListMiddleware: React.FC = () => {
    const { data } = useGetTodosQuery()
    const [deleteTodo] = useRemoveTodoMutation()
    const [addTodo] = useAddTodoMutation()
    const TdlContent = data?.map((todo) => {
        return (<ToDoListContent key={todo.id} content={todo.title} onClick={async () => {
            await deleteTodo(todo.id)
        }}>
        </ToDoListContent >)
    })

    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => {
                    // 增 
                    (async () => {
                        await addTodo({
                            title: input as string,
                            id: uuidv4(),
                        })
                    })()
                }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {TdlContent}
            </div>
        </div >
    )
}


//網頁有滾輪，不能剛好符合畫面大小

