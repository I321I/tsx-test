import { useEffect, useState } from "react"

interface inputFieldProps { }


export const InputField: React.FC<inputFieldProps> = () => {
    const [input, setInput] = useState<number | string>(123)
    const [data, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(input as any)
            const data: object | object[] = await response.json()
            setData(data)
        })()
    }, [input])


    return (
        <div>
            <input value={input} onChange={(event) => { setInput(event.target.value); console.log(data ? data : []) }}></input>
            {JSON.stringify(data)}
        </div>

    )
}