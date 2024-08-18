import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './ExpenseTracker'; 
import Calculator from './Calculator';
import BmiCalc from './BmiCalc';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/expense_tracker" element={<ExpenseTracker/>}/>
      <Route path="/calculator" element={<Calculator/>} />
      <Route path="/bmi" element={<BmiCalc />} />    </Routes>
  </BrowserRouter>
);


