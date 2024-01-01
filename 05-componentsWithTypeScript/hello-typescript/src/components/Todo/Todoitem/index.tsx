import React from "react";
import "./style.css";

interface TodoitemsProps {
  title: string;
}

const Todoitem: React.FC<TodoitemsProps> = (props) => {
  return <li>{props.title}</li>;
};

export default Todoitem;