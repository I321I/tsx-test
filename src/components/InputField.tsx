import { useEffect, useState } from "react"

interface inputFieldProps {
    data: unknown
}


export const InputField: React.FC<inputFieldProps> = ({ data }) => {
    const [input, setInput] = useState<number | string>(data as number || "")
    const [objectData, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(input as string)
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