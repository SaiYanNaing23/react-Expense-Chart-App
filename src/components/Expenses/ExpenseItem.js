import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseTitle from "./ExpenseTitle";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const changeTitle = () =>{
        setTitle("Update");
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div>
            <ExpenseTitle title = {title}></ExpenseTitle>
            <ExpenseAmount amount = {props.amount}></ExpenseAmount>           
            </div>  
            <button onClick={changeTitle}>Change</button>
        </Card>
    );
};

export default ExpenseItem;