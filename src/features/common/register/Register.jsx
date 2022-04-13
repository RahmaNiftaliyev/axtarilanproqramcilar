/* eslint-disable no-unused-vars */
import React from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';


// eslint-disable-next-line react/prop-types
const Register = ({ freelancer, customer }) => {

  return (
    <div>
      {
        !freelancer && !customer ?
          (
            <div>
              <h1>Register</h1>
              <p>Register as a freelancer or customer</p>
              <button>Freelancer</button>
              <button>Customer</button>
            </div>
          ) : freelancer ? <EmployeeRegister /> : <CustomerRegister />
      }
    </div>
  );
};

export default Register;
