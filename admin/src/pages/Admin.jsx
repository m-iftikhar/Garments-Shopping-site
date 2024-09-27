import React from 'react'
import './admin.css'
import Sidebar from '../component/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../component/Addproduct'
import Listproduct from '../component/Listproduct'
const admin = () => {
  return (
    <div className='admin'>
         <Sidebar/>
         <Routes>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/listproduct' element={<Listproduct/>}/>
         </Routes>
    </div>
  )
}

export default admin
