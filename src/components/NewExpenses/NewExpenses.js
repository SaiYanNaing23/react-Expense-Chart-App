import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) =>{
    const saveExpenseDataHandler = (inputFormData) =>{
        const newExpenseObj = {
            ...inputFormData,
            id : Math.random().toString(),
        }
        props.onAddExpenseData(newExpenseObj);
        // console.log(newExpenseObj);
    }
    return(
        <div className="new-expense">
            <ExpenseForm saveExpense = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpenses;