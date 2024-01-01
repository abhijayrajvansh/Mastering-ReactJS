import React, { useState } from "react";
import "./style.css";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleINCoperator = () => {
    setCounter(counter + 1);
  };

  const handleDECoperator = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <div className="counterContainer">
      <h1 className="counterValue">{counter}</h1>

      <div onClick={handleINCoperator} className="buttonINC">
        INC
      </div>
      <div onClick={handleDECoperator} className="buttonDEC">
        DEC
      </div>
    </div>
  );
};

export default Counter;
