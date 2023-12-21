import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';


export default function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/home" element={<Home />} />
  </Routes>
  
  </>
  )
}
