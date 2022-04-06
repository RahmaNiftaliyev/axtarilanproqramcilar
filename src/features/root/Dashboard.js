/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import { Routes, Route } from "react-router-dom";
import PasswordRecovery from "../common/passwordrecovery/PasswordRecovery";
import Register from "../common/register/Register";
import Login from "../common/login/Login";

const Dashboard = () => {
  return (
    <div className="commonContainer">
      <div className="navTop">
          <div className="navBar"></div>
          <div className="aside"></div>
          <div className="main"></div>
          <div className="footer"></div>
      </div>

    </div>
  );
};

export default Dashboard;
