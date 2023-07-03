import "./ExpenseItem.css"
const ExpenseDetails=(props)=>{
    const deleteExpense=()=>{
        
    }
    return <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div>{props.location}</div>
    <div className="expense-item__price">{props.amount}</div>
    <button onClick={deleteExpense}>delete expenses</button>
</div>
}
export default ExpenseDetails;