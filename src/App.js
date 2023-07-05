import ExpenseForm from "./components/Expenses/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
function App() {
  let array=[
    {
      id:"e1",
      title:"helmet",
      amount:3650,
      date:new Date(2023,8,2),
      location:"Karol Bagh"
    },
    {
      id:"e2",
      title:"shoes",
      amount:3850,
      date:new Date(2023,8,2),
      location:"kalka ji"
    },
    {
      id:"e3",
      title:"patrol",
      amount:3900,
      date:new Date(2023,8,1),
      location:"gurugram"
    },
    {
      id:"e4",
      title:"iphone",
      amount:36500,
      date:new Date(2023,7,30),
      location:"elante mall"
    },
    {
      id:"e5",
      title:"cloths",
      amount:4100,
      date:new Date(2023,7,29),
      location:"bhiwani"
    },
    {
      id:"e6",
      title:"alloy",
      amount:38000,
      date:new Date(2023,7,20),
      location:"Karol Bagh"
    },
    {
      id:"e7",
      title:"dinner",
      amount:1250,
      date:new Date(2023,7,25),
      location:"murthal"
    }
  ]
  const addExpenseHandler=(expense)=>{
    console.log("in app.js");
    console.log(expense);
    
  }
  return (
    <div>
      <h2>Let's get started!</h2>
     <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={array} />
    </div>
  );
}

export default App;
