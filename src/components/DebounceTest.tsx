import type React from "react";
import { useMemo, useState } from "react";

export const DebounceTest: React.FC = () => {
    const [input, setInput] = useState<string>('')
    const [searchResult, setSearchResult] = useState<React.ReactNode[]>([])
    const data: string[] = ['123', '1123', '11123', '223', '2223', '22223', '323', '3323', '33323', '123123']
    const debounce = <T extends unknown[]>(func: (...args: T) => unknown, wait?: number) => {
        let timer: null | ReturnType<typeof setTimeout> = null
        return (...args: T) => {
            if (timer != null) clearTimeout(timer)
            timer = setTimeout(() => { func(...args) }, wait ?? 500)
        }
    }
    const searchDebounce = useMemo(() => debounce<(string)[]>(
        (event) => (
            setSearchResult(data.filter((item: string) => event != "" && item.includes(event))
                .map((item) => (<><br /><button onClick={() => { setInput(item); searchDebounce(item) }}>{item}</button></>))
            ))
    ), [])
    return (
        <div>
            <input onInput={(event: React.ChangeEvent<HTMLInputElement>) => { setInput(event.currentTarget.value); searchDebounce(event.currentTarget.value) }} value={input}></input>
            {searchResult}
        </div >)
}
