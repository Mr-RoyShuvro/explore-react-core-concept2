import { useState } from "react"

export default function Employee(){
    const [employeeCount, setEmployee] = useState(15);
    const Add =()=>{
        setEmployee(employeeCount+1);
    }
    const Remove = ()=>{
        setEmployee(employeeCount-1);
    }
    const employeeStyle ={
        border: '2px solid red',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px'
    }
    return(
        <div style={employeeStyle}>
            <h2>Employee: {employeeCount}</h2> 
            <button onClick={Add}>Add Employee</button>
            <button onClick={Remove}>Remove Employee</button>
        </div>
    )
}