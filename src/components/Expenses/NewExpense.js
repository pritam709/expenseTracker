import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const formSubmitHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense)
  };
  return <ExpenseForm onFormSubmit={formSubmitHandler} />;
};

export default NewExpense;
