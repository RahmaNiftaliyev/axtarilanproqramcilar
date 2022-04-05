/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import { Routes, Route } from "react-router-dom";
import PasswordRecovery from "../common/passwordrecovery/PasswordRecovery";
import Register from "../common/register/Register";
import Login from "../common/login/Login";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<PasswordRecovery />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
