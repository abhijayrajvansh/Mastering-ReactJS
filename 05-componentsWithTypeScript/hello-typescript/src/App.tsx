import React from "react";
import Todo from "./components/Todo";

const myTodoItems = [
  {
    id: 1,
    data: "to master react js",
  },
  {
    id: 2,
    data: "to build nextjs projects"
  },
  {
    id: 3,
    data: "i need to do things best"
  }
]


const App: React.FC = (props) => {
  return (
    <div>
      <Todo items={myTodoItems}/>
    </div>
  );
};

export default App;
