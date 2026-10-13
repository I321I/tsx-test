import { useCallback, useEffect, useState, type ReactElement } from "react";
import type React from "react";
import { Button } from "react-bootstrap";

const throttle = <T extends unknown[]>(func: (...args: T) => unknown, time?: number) => {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function (...args: T) {
        if (timer != null) return
        timer = setTimeout(() => {
            func(...args)
            timer = null
        }, time ?? 500)
    }
}

export const ThrottleTest: React.FC = () => {
    const fillBr = (number: number) => {
        const result: ReactElement[] = []
        for (let i = 0; i <= number; i++) {
            result.push(<br id={JSON.stringify(i)}></br>)
        }
        return result
    }
    const [displayButton, setDisplayButton] = useState<boolean>(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttledWheel = useCallback(throttle<number[]>(
        () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            if (scrollTop > 100) { setDisplayButton(true) } else { setDisplayButton(false) }
        }, 500
    ), [])
    const handleWheel = () => {
        throttledWheel()
    }
    useEffect(() => {

        window.addEventListener('wheel', handleWheel)

        return () => { window.removeEventListener('wheel', handleWheel) }
    }, [])

    return (
        <div>
            {fillBr(50)}
            {displayButton && <Button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); handleWheel() }}
                style={{ display: "flex", position: "fixed", right: "50px", bottom: "20px" }}>回到頂部</Button>}
        </div >)
}