/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./../common/register/Register";
import Login from "./../common/login/Login";

const Dashboard = () => {
  const [customer, setCustomer] = useState(false);
  const [freelancer, setFreelancers] = useState(false);

  return (
    <div>
      <Routes>
          <Route path="/" element={<Register customer={customer} freelancer={freelancer} />} />
          <Route path="/login" element={<Login customer={customer} freelancer={freelancer} />} />

      </Routes>
    </div>
  );
};

export default Dashboard;
