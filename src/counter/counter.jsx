import React, { useState } from 'react'
import './counter.css'
import { FaHotjar } from "react-icons/fa";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [state, setDesable] = useState(true);

    console.log(count);

    const increment = () => {
        setCount((count) => count + 1);
        if(count >= 0){
            setDesable(false);
        }
    }

    const decrement = () => {
        setCount((count) => count - 1);
        if(count <= 1){
            setDesable(true)
        }
    }

    const zero = () => {
        setCount((count) => count = 0);
        setDesable(true)
    }

  return (
    <div>
      <div className="container">
        <h1>React Counter App</h1>
        <div className="count">
            <h1>{count}</h1>
        </div>

        <div className="action">
            <button onClick={increment}>+</button>
            <button onClick={decrement} disabled={state}>-</button>
            <button onClick={zero}>0</button>
        </div>

        <p> <FaHotjar/> Mahmood Hassan Rameem</p>
      </div>
    </div>
  )
}
