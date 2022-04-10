import React from "react";
import { useTypeWriter } from "@vegadev/react-type-writer";

const TerminalReact = ({
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
      delay: 1000,
      blinkerDelay: 300,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return (
    <div className={`${terminalColor} termina-md`}>
        <div className="terminaHeader d-flex align-items-center">
          <h3 className="terminal-pl-md">login.js</h3>
        </div>
      <h1 className="terminal-pl-md">Welcome to our wanted society</h1>
      <div className="terminal-pl-md">{text}</div>
    </div>
  );
};

export default TerminalReact;
