import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm =(props)=>{
    const[title,setTitle] = useState("");
    const[amount,setAmount] = useState("");
    const[dateVal,setDateVal] = useState("");
    // console.log(title,amount,dateVal);
    // const [userInput,setUserInput] = useState({
    //     title : "",
    //     amount : "",
    //     date : "",
    // })
    const titleHandler = (e)=>{
        setTitle(e.target.value)
//         setUserInput((prev) =>{
//             return{
//             ...prev,
//             title : e.target.value,
//     }
// })
    }
    const amountHandler = (e)=>{
        setAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount : e.target.value,
        // })
    }
    const dateValHandler = (e)=>{
        setDateVal(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: e.target.value,
        // })
        // console.log(userInput);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const expense = {
            title,
            amount,
            date: new Date(dateVal),
        }
        props.saveExpense(expense);
        // console.log(expense);
        setTitle("");
        setAmount("");
        setDateVal("");
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler}></input>
                </div>  
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} value={amount} onChange={amountHandler}></input>
                </div> 
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2023-07-31" value={dateVal} onChange={dateValHandler}></input>
                </div> 
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;