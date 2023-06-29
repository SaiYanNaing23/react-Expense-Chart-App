import ExpenseItem from "./ExpenseItem"
import "./ExpenseItem.css"
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react";
const Expenses = (props) => {
    const [filterYear,setFilterYear] = useState("2023");
    const onChangerFilterHandler = (filterYearVal) =>{
        setFilterYear(filterYearVal);
    }
    const filterExpense = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filterYear;
    })
    return(
        <div>
            <ExpenseFilter selected = {filterYear} onChangeFilter = {onChangerFilterHandler}></ExpenseFilter>
            {filterExpense.map((expense) => 
                <ExpenseItem
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                ></ExpenseItem>
            )}
        </div>
    )
}
export default Expenses;