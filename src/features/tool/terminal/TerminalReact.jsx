import React from 'react';
import { useTypeWriter } from '@vegadev/react-type-writer';
import { Badge } from 'reactstrap';

const TerminalReact = ({
  isChoisable,
  className,
  terminalColor,
  terminalText,
  setIsCustomer,
  setIsEmployee,
}) => {
  const typeWriterInvoker = () => {
    return {
      text: [terminalText ? terminalText : "console.log('Hello World')"],
      infiniteLoop: true,
      blinker: '|',
      delay: 100,
      blinkerDelay: 2000,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return (
    <div className={`${terminalColor} termina-md, ${className}`}>
      <h1 className="terminal-pl-md">Welcome to our wanted society</h1>
      <div className="terminal-pl-md">
        <Badge color="danger">$root~ {text}</Badge>
      </div>
      {isChoisable && (
        <div
          className="gradient-background dflex justify-content-around align-items-center"
          style={{
            width: '80%',
            height: 'calc(100vh - 150px)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0px 0px 5px 1px #E7FFF3',
            display: 'flex',
          }}
        >
          <div
            className="cardsSelection customer"
            onClick={() => setIsCustomer((prev) => !prev)}
          ></div>
          <div
            className="cardsSelection freelancer"
            onClick={() => setIsEmployee((prev) => !prev)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default TerminalReact;
