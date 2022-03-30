import React from "react";

import { Todo } from "../types";
interface TodoItemProps {
  todo: Todo;
  markComplete: (id: Todo["id"]) => void;
  delTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({ todo, delTodo, markComplete }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" onChange={() => markComplete(todo.id)} />{" "}
      {todo.title}{" "}
      <button type={"button"} className="" onClick={() => delTodo(todo.id)} >
        x
      </button>
    </li>
  );
};

export default TodoItem;
