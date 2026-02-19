import type React from "react"
import styles123 from "./ToDoList_API.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { stringify, v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";


export const ToDoListAPI: React.FC = () => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        //查
        (async () => {
            const getAPI = await fetch('https://todo-backend-worker.yeh19921026.workers.dev/api/todos')
            const result = getAPI
            console.log(result)
        })()
    }, [])
    const TdlContent = /*todo.map((todo)*/
        () => {
            return (<ToDoListContent key={
                123
                // todo.id
            } content={
                123
                // todo.content
            } onClick={() => {
                //刪
                // dispatch(removeTodo(todo))
            }}>
            </ToDoListContent >)
        }

    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => {
                    // 增 
                    (async () => {
                        await fetch('https://todo-backend-worker.yeh19921026.workers.dev/api/todos',
                            {
                                method: 'POST',
                                body: encodeURI(JSON.stringify({
                                    id: uuidv4(),
                                    content: input as string
                                })),
                                headers: { "content-type": "application/json" }
                            })
                    })()
                }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {/* {TdlContent} */}
            </div>
        </div >
    )
}


//網頁有滾輪，不能剛好符合畫面大小

