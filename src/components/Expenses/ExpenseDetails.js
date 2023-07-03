import { useState } from "react"
import "./ExpenseItem.css"
const ExpenseDetails=(props)=>{
    const [expense, setExpense]=useState(props.amount)
    const deleteExpense=()=>{
        
    }
    const updateExpense=()=>{
        setExpense("100");
    }

    return <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div>{props.location}</div>
    <div className="expense-item__price">${expense}</div>
    <button onClick={updateExpense}>update expenses</button>
    {/* <button onClick={deleteExpense}>delete expenses</button> */}
</div>
}
export default ExpenseDetails;