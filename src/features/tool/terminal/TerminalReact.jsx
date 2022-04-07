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
      text: [terminalText],
      infiniteLoop: true,
      blinker: "|",
      delay: 1000,
      blinkerDelay: 300,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return (
    <div className={`${terminalColor} termina-md`}>
        <div className="terminaHeader"></div>
      <h1 className="text-center">Welcome to our wanted society</h1>
      <div style={{paddingLeft:"20px"}}>{text}</div>
    </div>
  );
};

export default TerminalReact;
