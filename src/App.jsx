import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from './pages/auth';
import { Expenses } from './pages/expenses'; 

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/expenses'  element={<Expenses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
