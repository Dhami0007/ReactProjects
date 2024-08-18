import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav className="bg-slate-300 p-2">
            <ul className="flex flex-row">
                <li className="mx-2 py-1 px-2 rounded-md bg-slate-200">
                    <Link to="/expense_tracker">Expense Tracker</Link>
                </li>
                <li className="mx-2 py-1 px-2 rounded-md bg-slate-200">
                    <Link to="/calculator">Calculator</Link>
                </li>
                <li className="mx-2 py-1 px-2 rounded-md bg-slate-200">
                    <Link to="/bmi">BMI Calculator</Link>
                </li>
            </ul>
      </nav>
    </div>
  )
}

export default Navigation