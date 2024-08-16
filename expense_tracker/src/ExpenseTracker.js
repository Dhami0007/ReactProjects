import React from 'react'
import './index.css'

const ExpenseTracker = () => {

    const [expense, setExpense] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [list, setList] = React.useState([])
    const [total, setTotal] = React.useState(0)
    const [isEdit, setIsEdit] = React.useState(false)
    const [editId, setEditId] = React.useState(null)

    function handleExpChange(event){
        setExpense(event.target.value)
    }

    function handleAmtChange(event){
        setAmount(parseInt(event.target.value))
    }

    function addToList(){
        setTotal(parseInt(total) + amount)
        
        if (expense === '' || amount === ''){
            alert('Please enter a valid expense/amount')
        }
        else{
            const new_expense = {
                id: list.length + 1,
                expense: expense,
                amount: amount
            }
    
            setList([...list, new_expense])
            setExpense('')
            setAmount('')
        }
        
    }

    function handleDelete(id,amount){
        const updated_list = list.filter((item) => item.id !== id)
        setList(updated_list)
        setTotal(total - amount)
    }

    function handleEdit(id, expense, amount){
        if (isEdit){
            saveEdit()
            setIsEdit(false)
        }
        else{
            setIsEdit(true)
            setEditId(id)
            setExpense(expense)
            setAmount(amount)
            setTotal(total - amount)
        }
        
    }

    function saveEdit(){
        const updated_list = list.map((item) => {
            if(item.id === editId){
                return {
                    ...item,
                    expense: expense,
                    amount: amount
                }
            }
            return item
        })
        setTotal(total + amount)
        setList(updated_list)
        setExpense('')
        setAmount('')
        setIsEdit(false)
        setEditId(null)
    }

  return (
    <div id="container" className="bg-slate-200 h-screen flex flex-col place-items-center">
        <div id="input-group" className="bg-slate-100 mt-10 p-5 text-4xl font-bold rounded-lg shadow-sm shadow-slate-500 w-1/3 flex flex-col place-items-center">
            <h1 className="py-5 text-center  my-3">Expense Tracker</h1>
            <input type="text" value={expense} placeholder="Enter Expense" onChange={handleExpChange} className="text-2xl font-medium text-slate-400 px-4"/><br/>
            <input type="number" value={amount} placeholder="Enter Amount" onChange={handleAmtChange} className="text-2xl font-medium text-slate-400 px-4"/><br/>
            <div className="flex flex-col place-items-center">
                <button onClick={addToList} className ="py-3 px-5 text-center rounded-lg shadow-md shadow-slate-300 bg-[#6ee7b7] hover:shadow-slate-400 hover:bg-[#44c692] ">Add Expense</button>
            </div>
        </div>

        <div id="list" className="mt-10 w-1/3 flex flex-col font-medium">
        <h2 className="flex flex-row justify-between py-1 px-2 rounded-lg bg-gradient-to-r from-blue-300 to-green-300 font-mono mb-5"><span>Total:</span><span>₹{total}</span></h2>
            <ul>
                {list.map((item) => (
                    <li key={item.id} className="flex flex-row justify-between pb-3 px-2">
                        {isEdit && editId == item.id ? (<>
                        <span><input type="text" value={expense} onChange={handleExpChange}/></span>
                        <br/>
                        <span><input type="number" value={amount} onChange={handleAmtChange}/></span>
                        </>
                        ) : (<><span className="w-44">{item.expense}</span> <span>₹{item.amount}</span></>)}

                        <span className="rounded-md bg-blue-500 text-sm text-white p-1 hover:bg-blue-600"><button onClick={()=>handleEdit(item.id, item.expense, item.amount)}>Edit</button></span>
                        <span className="rounded-md bg-red-500 text-sm text-white p-1 hover:bg-red-600"><button onClick={()=>handleDelete(item.id, item.amount)}>Delete</button></span> 
                        </li>))}
            </ul>
        </div>

    </div>
  )
}

export default ExpenseTracker