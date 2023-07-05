import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const changeYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };
  const filteredArray = props.items.filter(
    (item) => year === item.date.getFullYear().toString()
  );

  let noOfExpenses= "zero";
  if(filteredArray.length ===1){
    return (
        <Card className="expenses">
          <ExpenseFilter onChangeYear={changeYearHandler} defaultYear={year} />
          <p style={{color:"white"}}>Only single Expense here. Please add more...</p>
         { filteredArray.map((item) => (
            <ExpenseItem key={item.id} title={item.title}
            date={item.date} amount={item.amount} />
          ))}
          
          
        </Card>
      );
    
  }
  if(filteredArray.length >1){
    noOfExpenses="many";
  }

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeYear={changeYearHandler} defaultYear={year} />
      {(noOfExpenses==="zero") ? <p style={{color:"white"}}>no expenses found</p>:(filteredArray.map((item) => (
        <ExpenseItem key={item.id} title={item.title}
        date={item.date} amount={item.amount} />
      )))}
      
      
    </Card>
  );
};
export default Expenses;
