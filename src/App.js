import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card.js";
import "./components/Expenses/Expenses.css"
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";
const Dummy_Data = [
  {
  id: "e1",
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
  },
  {
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
  },
  
  ];

const App = () => {
  const [expenses,setExpense] = useState(Dummy_Data);
  const addExpenseHandler = (formInputData) =>{
    setExpense((expenses) => [formInputData,...expenses])
    console.log("In App.js");
    console.log(formInputData);

  }
  return (
    <Card className = "expenses">
   <NewExpenses onAddExpenseData = {addExpenseHandler}></NewExpenses>
   <Expenses items = {expenses}></Expenses>
   </Card>
  );
}

export default App;
