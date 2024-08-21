import { Link } from "react-router-dom"
import './index.css'
import 'tailwindcss/tailwind.css'
import Navigation from "./navigation"

const Layout = () => {
  return (
    <div className="bg-slate-300 h-screen">
      <h1 className="font-bold text-black text-5xl p-10">These are my React Projects</h1>
      <ul className="px-12">
        <li className="m-2 py-1 px-2 rounded-md bg-slate-200 w-1/5 text-center">
            <Link to="/expense_tracker">Expense Tracker</Link>
        </li>
        <li className="m-2 py-1 px-2 rounded-md bg-slate-200 w-1/5 text-center">
            <Link to="/calculator">Calculator</Link>
        </li>
        <li className="m-2 py-1 px-2 rounded-md bg-slate-200 w-1/5 text-center">
            <Link to="/bmi">BMI Calculator</Link>
        </li>
        <li className="m-2 py-1 px-2 rounded-md bg-slate-200 w-1/5 text-center">
            <Link to="/weather">Weather</Link>
        </li>
      </ul>
    </div>
  )
}

export default Layout