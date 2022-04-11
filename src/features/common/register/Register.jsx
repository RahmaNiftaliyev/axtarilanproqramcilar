import React from 'react';
import { useState, useEffect } from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';
import TerminalReact from '../../tool/terminal/TerminalReact';
import terminal from './terminal';
const Register = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);


  return(
    <div className="register-container">
    {!isEmployee && !isCustomer ? (
      <TerminalReact
      className="terminal-lg"
        terminalColor={terminal.TERMINAL_DARK}
        terminalText="welcome to wanted"
        terminalTextWeight={'500'}
        terminalTextSize={'2rem'}
      >
        1231231253
      </TerminalReact>
    ) : isEmployee ? (
      <EmployeeRegister />
    ) : (
      <CustomerRegister />
    )}
  </div>
  )
};

export default Register;
