import type React from "react"
import styles123 from "./ToDoList_redux.module.scss"
import { InputProp } from "./ToDoListInput"
import { ToDoListContent } from "./ToDoListContent"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

interface json {
    id: string
    title: string
}
export const ToDoListAPI: React.FC = () => {
    const [data, setData] = useState<json[] | []>([])
    const [reRenderState, reRender] = useState(0)
    useEffect(() => {
        //查
        (async () => {
            const getAPI = await fetch('https://todo-backend-worker.yeh19921026.workers.dev/api/todos')
            const result: json[] = await getAPI.json()
            setData(result)
        })()
    }, [reRenderState])
    const TdlContent = data?.map((todo) => {
        return (<ToDoListContent key={todo.id} content={todo.title} onClick={async () => {
            //刪
            await fetch(`https://todo-backend-worker.yeh19921026.workers.dev/api/todos/${todo.id}`,
                {
                    method: 'DELETE',
                })
            reRender(reRenderState + 1)
        }}>
        </ToDoListContent >)
    })

    return (
        <div className={styles123.background + " " + "background mx-auto position-absolute top-5 start-0"}>
            <div className={styles123.ToDoList + " " + "ToDoList"}>
                <InputProp onClick={(input) => {
                    // 增 
                    (async () => {
                        await fetch('https://todo-backend-worker.yeh19921026.workers.dev/api/todos',
                            {
                                method: 'POST',
                                body: JSON.stringify({
                                    title: input as string,
                                    id: uuidv4(),
                                }),
                                headers: { "content-type": "application/json" }
                            })
                        reRender(reRenderState + 1)
                    })()
                }}></InputProp>
                <div className={styles123.inputBlock}></div>
                {TdlContent}
            </div>
        </div >
    )
}


//網頁有滾輪，不能剛好符合畫面大小

