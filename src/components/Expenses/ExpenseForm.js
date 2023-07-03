import "./ExpenseForm.css";
const ExpenseForm = () => {
    const inputChangeHandler=(event)=>{

        console.log(event.target.value);

    }
  return (
    
    <form className="new-expense" onChange={inputChangeHandler}>
      <div className="new-expense__controls">
        <label>Expense Title</label>
        <input type="text"></input>
      </div>
      <div className="new-expense__controls">
        <label>Expense Date</label>
        <input type="date"></input>
      </div>
      <div className="new-expense__controls">
        <label>amount</label>
        <input type="number"></input>
      </div>
      <div className="new-expense__controls">
        <label>location</label>
        <input type="text"></input>
      </div>

      <div className="new-expense__actions ">
        <button type="submit">Submit</button>
      </div>
    </form>
   
  );
};
export default ExpenseForm;
