import React from 'react'
import Navbar from '../../src/components/Navbar/Navbar'
import Sidebar from '../../src/components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './List/List'
import Add from './Add/Add'
import Orders from './Orders/Orders'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>


    </>
  )
}

export default App