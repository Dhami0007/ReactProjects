import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './Expense/ExpenseTracker.js'; 
import Calculator from './Calc/Calculator.js';
import BmiCalc from './BMI/BmiCalc.jsx';
import Layout from './Layout';
import Weather from './Weather/Weather';
import ShoppingCart from './Shopping/ShoppingCart.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/expense_tracker" element={<ExpenseTracker/>}/>
      <Route path="/calculator" element={<Calculator/>} />
      <Route path="/bmi" element={<BmiCalc />}/>
      <Route path="/weather" element={<Weather />}/>
      <Route path="/shopping" element={<ShoppingCart/>}/>
    </Routes>
  </BrowserRouter>
);


