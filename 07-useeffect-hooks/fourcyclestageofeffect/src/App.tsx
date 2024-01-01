import React, { useState } from "react";
import Cycle from "./components/Cycle";
import './App.css'

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  return (
    <div>
      Working App!
      <div className="mainCanvas">
        <div className="Toggler" onClick={(e) => {setState(!state)}}>Trigger To Unload</div>
      </div>
      {state ? <Cycle /> : ""}
    </div>
  );
};

export default App;
