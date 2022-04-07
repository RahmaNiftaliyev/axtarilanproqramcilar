/* eslint-disable no-unused-vars */
// @ts-nocheck

import React, { useState, useEffect } from "react";
import CustomerRegister from "./CustomerRegister";
import EmployeeRegister from "./EmployeeRegister";

const Register = ({ customer, freelancers }) => {
  return <>{customer ? <CustomerRegister /> : <EmployeeRegister />}</>;
};

export default Register;
