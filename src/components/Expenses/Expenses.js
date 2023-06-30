import "./ExpenseItem.css"
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filterYear,setFilterYear] = useState("selectYear");
    const onChangerFilterHandler = (filterYearVal) =>{
        setFilterYear(filterYearVal);
    }
    const filterExpense = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filterYear;
    });

    const allExpenses = [...props.items]
    // let expenseContent = <p>No Expense Found</p>
    // if(filterExpense.length > 0) {
    //     expenseContent = filterExpense.map((expense) => 
    //     <ExpenseItem
    //     key = {expense.id}
    //     title = {expense.title}
    //     amount = {expense.amount}
    //     date = {expense.date}
    //     ></ExpenseItem>)
    // }
    return(
        <div>
            <ExpensesChart expenses = {filterExpense}></ExpensesChart>
            <ExpenseFilter selected = {filterYear} onChangeFilter = {onChangerFilterHandler}></ExpenseFilter>
            {/* {expenseContent} */}
            {filterYear === "selectYear" ? <ExpenseList items = {allExpenses}></ExpenseList> : <ExpenseList items = {filterExpense}></ExpenseList>}
        </div>
    )
}
export default Expenses;