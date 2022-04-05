import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './../common/login/Login'

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Dashboard