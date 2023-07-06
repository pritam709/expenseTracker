import "./ExpenseForm.css"
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showForm,setShowForm]=  useState(false);
  const formSubmitHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense)
  };
  const formToggleHandler=()=>{
    setShowForm(false)

  }

  const showFormHandler=()=>{
    setShowForm(true);
  }

  const btn= <div className="new-expense"><button onClick={showFormHandler}>Add Expense</button></div>

  return (showForm)?<ExpenseForm onFormSubmit={formSubmitHandler} formCancel={formToggleHandler}/>:btn
}

export default NewExpense;
