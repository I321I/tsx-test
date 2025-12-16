import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

interface inputFieldProps { 
    data: any
}


export const InputField: React.FC<inputFieldProps> = ({data}) => {
    const [input, setInput] = useState<number | string>(data)
    const [objectData, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(input as any)
            const data: object | object[] = await response.json()
            setData(data)
        })()
    }, [input])


    return (
        <div>
            <input value={input} onChange={(event) => { setInput(event.target.value); console.log(objectData ? objectData : []) }}></input>
            {JSON.stringify(objectData)}
        </div>

    )
}