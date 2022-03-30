import React, { useState } from "react";

const AddTodo = (props: { addTodo: Function }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          className="input is-medium"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo .."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button className="" type="submit" color="primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
