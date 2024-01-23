import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    function Add(){
        const newCount = count + 1;
        return setCount(newCount);
    }
    const Reduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
    return (
        <div style={{
            padding: '20px',
            margin: '20px',
            border: 'solid 2px tomato',
            borderRadius: '20px'
        }}>
            <h2>Counter: {count}</h2>
            <button onClick={Add}>Add</button>
            <button onClick={Reduce}>Reduce</button>
        </div>
    )
}