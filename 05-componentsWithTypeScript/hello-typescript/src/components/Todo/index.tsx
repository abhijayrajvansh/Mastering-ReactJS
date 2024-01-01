import React from "react";
import Todoitem from "./Todoitem";
import "./style.css";

interface TodoListItems {
  id: number;
  data: string;
}

interface TodoProps {
  items: TodoListItems[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todoContainer">
      <ol>
        {/* <Todoitem title="Learn" /> */}
        {props.items.map((item) => (
          <Todoitem key={item.id} title={item.data} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
