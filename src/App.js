// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/header/Header';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Customers from './components/customer/Customers';
import Store from './components/store/Store';
import Feedback from './components/feedback/Feedback';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Header />}>
        <Route index element={<Dashboard />} />
        <Route path="feedback" element={<Feedback />}/>
        <Route path="customers" element={<Customers />} />
        <Route path="store" element={<Store />} />
      </Route>
    </Routes >
  </BrowserRouter>
);
}

export default App;

