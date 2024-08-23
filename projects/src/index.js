import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './ExpenseTracker'; 
import Calculator from './Calculator';
import BmiCalc from './BmiCalc';
import Layout from './Layout';
import Weather from './Weather';
import ShoppingCart from './ShoppingCart';

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


