import "./ExpenseFilter.css"
const ExpenseFilter = (props) => {
    const formSubmitHandler=(event)=>{
        props.onChangeYear(event.target.value)
    }
  return <div className="year">
    <label>filter by year</label>
   <select value={props.defaultYear}  onChange={formSubmitHandler} >
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
    </select>
  </div>
  
};

export default ExpenseFilter;
