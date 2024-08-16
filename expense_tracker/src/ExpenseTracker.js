import React from 'react'

const ExpenseTracker = () => {

    const [expense, setExpense] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [list, setList] = React.useState([])

    function handleExpChange(event){
        setExpense(event.target.value)
    }

    function handleAmtChange(event){
        setAmount(parseInt(event.target.value))
    }

    function addToList(){

        const new_expense = {
            id: list.length + 1,
            expense: expense,
            amount: amount
        }

        console.log(new_expense)

        setList([...list, new_expense])
        setExpense('')
        setAmount('')
    }

    function handleDelete(id){
        const updated_list = list.filter((item) => item.id !== id)
        setList(updated_list)
    }

  return (
    <div>
        <h1>Expense Tracker</h1>
        <input type="text" value={expense} placeholder="Enter Expense" onChange={handleExpChange}/><br/>
        <input type="number" value={amount} placeholder="Enter Amount" onChange={handleAmtChange}/><br/>

        <button onClick={addToList}>Add Expense</button>

        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    {item.expense} - ${item.amount}&nbsp; &nbsp; &nbsp; &nbsp; <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </li>))
            }
        </ul>

    </div>
  )
}

export default ExpenseTracker