import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
