import { Component2 } from "./Component2"
import "./Component.css"
import i from "./Component2";

export const Component = () => {
    console.log(i)
    return <div id="firstDiv"><Component2></Component2><Component2></Component2></div>
}
