/* eslint-disable no-unused-vars */
import React from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';
import { useTypeWriter } from '@vegadev/react-type-writer';

// eslint-disable-next-line react/prop-types
const Register = ({ freelancer, customer }) => {
  const typeWriterInvoker = () => {
    return {
      text: [
        'Axtarılan Proqramçılarda qeydiyyatdan keç',
        'Sign in Wanted Developers App',
      ],
      infiniteLoop: true,
      blinker: '|',
      delay: 100,
      blinkerDelay: 2000,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return !freelancer && !customer ? (
    <div className="registers-home-page"></div>
  ) : freelancer ? (
    <EmployeeRegister />
  ) : (
    <CustomerRegister />
  );
};

export default Register;
