import React, { useState } from "react";
import { Todo } from "../types";

interface AddTodoProps {
  addTodo: (title: Todo["title"]) => void;
}
const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title");
      return;
    }
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo .."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
