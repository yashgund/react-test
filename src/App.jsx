import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { List } from './pages/List'
import { Form } from './components/form'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
