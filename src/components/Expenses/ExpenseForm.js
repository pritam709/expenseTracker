import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [initialState, setState] = useState({
    title:"",
    amount:"",
    date:""

  });
//   const [amount, setAmount] = useState("");
 
//   const [date, setDate] = useState();
   //    const [location,setLocation]=useState("");
  const inputTitleHandler = (event) => {
    setState({...initialState,title:event.target.value});
    console.log(event.target.value);
  };
  const inputDateHandler = (event) => {
    setState({...initialState,date:event.target.value});
    console.log(event.target.value);
  };
  const inputAmountHandler = (event) => {
    setState({...initialState,amount:event.target.value});
    console.log(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const obj= {
     title: initialState.title,
     amount:initialState.amount,
     date:new Date(initialState.date)
    }
         console.log(obj);
      props.onFormSubmit(obj);
      setState({
        title:"",
        amount:"",
        date:""
      })
  }
  const formToggle=()=>{
    props.formCancel();
  }
  return (
    <form className="new-expense" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label>Expense Title</label>
        <input type="text" onChange={inputTitleHandler} value={initialState.title}></input>
      </div>
      <div className="new-expense__controls">
        <label>Expense Date</label>
        <input type="date" onChange={inputDateHandler} value={initialState.date}></input>
      </div>
      <div className="new-expense__controls">
        <label>amount</label>
        <input type="number" onChange={inputAmountHandler} value={initialState.amount}></input>
      </div>
      {/* <div className="new-expense__controls">
        <label>location</label>
        <input type="text"></input>
      </div> */}

      <div className="new-expense__actions ">
      <button type="submit" onClick={formToggle}>cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
