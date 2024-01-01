import React, { useEffect, useState } from "react";
import "./style.css";

const Cycle: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter Mounted")

    return function () {
      console.log("Counter Unmounted")
    }
  }, []) // this get called when the function gets dumbed

  useEffect(() => {
    console.log("user Updated Value: ", counter)
  }, [counter]) // very important thing is that useEffect wil only effect when it is called in the same root function

  const handleINCoperator = () => {
    setCounter(counter + 1);
  };

  const handleDECoperator = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <div>

      <h1 className="headline">Four Cycles of useEffect hook!</h1>

      <h2 className="counterContainer">Counter Value: {counter}</h2>

      <div className="buttonArea">
        <div onClick={handleINCoperator} className="buttonINC">
          INC
        </div>
        <div onClick={handleDECoperator} className="buttonDEC">
          DEC
        </div>
      </div>
      <p className="para">Note: Inspect & Open Console for log details.</p>
    </div>
  );
};

export default Cycle;
