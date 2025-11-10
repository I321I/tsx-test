import { useState } from "react"

interface inputFieldProps {

}
export const InputField: React.FC<inputFieldProps> = () => {
    const [input, setInput] = useState<number | string>(123)
    return (
        <input value={input} onChange={(event) => { setInput(event.target.value); console.log(event.target.value) }}></input>
    )
}