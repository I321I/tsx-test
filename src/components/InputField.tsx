import { useEffect, useState } from "react"

interface inputFieldProps { }

interface TableProps<T extends object> {
    columns: (keyof T)[]
    data: T[]
}
const inputContent = (url: string | number) =>
    [
        {
            url: url,
            getData: (item: object) => "data" in item ? item.data : []
        }
    ]





export const InputField: React.FC<inputFieldProps> = () => {
    const [input, setInput] = useState<number | string>(123)
    const [inputProcessed, setInputProcessed] = useState(() => inputContent(input)[0])
    const [data, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(inputProcessed?.url as any)
            const data: object | object[] = await response.json()
            setData(inputProcessed.getData(data))
        })()
    }, [inputProcessed.url])

    const FirstTenData = (data?: any) => {
        let result = []
        for (let index = 0; index < 10; index++) {
            result.push(data ? data[index] : [])
        }
        return result
    }

    return (
        <div>
            <input value={input} onChange={(event) => { setInput(event.target.value); setInputProcessed(inputContent(input)[0]);console.log(data? data: []) }}></input>
            {JSON.stringify(data)}
        </div>

    )
}