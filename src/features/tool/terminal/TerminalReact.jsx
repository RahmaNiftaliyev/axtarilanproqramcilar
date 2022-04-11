import React from "react";
import { useTypeWriter } from "@vegadev/react-type-writer";
import { Badge } from 'reactstrap'

const TerminalReact = ({
  className,
  terminalColor,
  terminalText,
  terminalTextSize,
  terminalTextWeight,
}) => {
  const typeWriterInvoker = () => {
    return {
      text: [terminalText ? terminalText : "console.log('Hello World')"],
      infiniteLoop: true,
      blinker: "|",
      delay: 100,
      blinkerDelay: 2000,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return (
    <div className={`${terminalColor} termina-md, ${className}`}>
        <div className="terminaHeader d-flex align-items-center">
          <h3 className="terminal-pl-md">login.js</h3>
        </div>
      <h1 className="terminal-pl-md">Welcome to our wanted society</h1>
      <div className="terminal-pl-md"><Badge color="danger">$root~ {text}</Badge></div>
    </div>
  );
};

export default TerminalReact;
