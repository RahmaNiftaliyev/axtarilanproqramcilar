import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './../common/register/Register';
import Login from './../common/login/Login';

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
