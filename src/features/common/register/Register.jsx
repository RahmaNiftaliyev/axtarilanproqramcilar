/* eslint-disable no-unused-vars */
import React from "react";
import TerminalReact from './../../tool/terminal/TerminalReact'
import terminal from './terminal'
import EmployeeRegister from "./EmployeeRegister";
import CustomerRegister from "./CustomerRegister";
import { Container } from '@nextui-org/react';

const Register = () => {
  const [isEmployee, setIsEmployee] = React.useState(false);
  const [isCustomer, setIsCustomer] = React.useState(false);

  const isChoisable = ![isEmployee,isCustomer].every(Boolean)

  return(
    <div>
    {!isEmployee && !isCustomer ? (
      <TerminalReact
        isChoisable={isChoisable}
        className="terminal-lg"
        terminalColor={terminal.TERMINAL_DARK}
        terminalText="welcome to wanted"
        terminalTextWeight={'500'}
        terminalTextSize={'2rem'}
        setIsEmployee={setIsEmployee}
        setIsCustomer={setIsCustomer}
      >
        
      </TerminalReact>
    ) : isEmployee ? (
      <EmployeeRegister isEmployee={isEmployee} setIsEmployee={setIsEmployee} />
    ) : (
      <CustomerRegister isCustomer={isCustomer} setIsCustomer={setIsCustomer} />
    )}
  </div>
  )
};

export default Register;
