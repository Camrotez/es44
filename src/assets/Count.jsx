import { useState } from "react"
import { Routes,Route,Link } from "react-router-dom"

function Count(){
    const [count, setCount]= useState(0)
    const add = ()=>{
        setCount(count + 1)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={add}>add</button>
        </div>
    )
}
export default Count