import { Button } from "react-bootstrap"
//這decrement, increment是function，會生出參數，而不是功能本身
import { decrement, increment } from "../store/Counter"
import { useRootDispatch, useRootSelector } from "../main"

export const Counter: React.FC = () => {
    const counter = useRootSelector((store) => store.CounterReducer.counterState)
    const dispatch = useRootDispatch()
    return (
        <div>
            {counter}
            <Button variant="outline-secondary" onClick={() => dispatch(increment())}>increase</Button>
            <Button variant="outline-secondary" onClick={() => dispatch(decrement())}>reduce</Button>
        </div>
    )
}