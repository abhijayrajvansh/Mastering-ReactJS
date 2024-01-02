import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res)
      .then((data) => data.json())
      .then((e) => setData(e));
  }, []);

  return (
    <div className="mainContainer">
      App
    </div>
  )
};

export default App;
