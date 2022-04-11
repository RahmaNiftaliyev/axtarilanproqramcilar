import React from 'react';
import { useState, useEffect } from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';

const Register = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    if (![isEmployee, isCustomer].every((item) => item === false)) {
      isEmployee ? setIsCustomer(false) : setIsEmployee(false);
    }
  }, [isEmployee, isCustomer]);
  return <></>;
};

export default Register;
