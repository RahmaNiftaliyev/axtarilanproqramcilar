/* eslint-disable no-unused-vars */
// @ts-nocheck


import React, { useState, useEffect } from "react";
import Freelancers from './../../extracomponents/Employees/Freelancers';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from "./EmployeeRegister";


const Register = ({
  customer,
  Freelancers
}) => {

  return (
   <>
   {
     customer ? (
       <CustomerRegister /> 
     ):<EmployeeRegister />
   }
   </>
  );
};

export default Register;
