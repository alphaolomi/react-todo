import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bulma-components";

const AddTodo = (props: { addTodo: Function }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <div className="mt-2">
    <form  onSubmit={onSubmit} style={{ display: "flex" }}>
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

      <Button  className=" is-medium"  type="submit" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
