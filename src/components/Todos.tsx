import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const Todos = (props: any) => {
  return props.todos.map((todo: any) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={props.markComplete}
      delTodo={props.delTodo}
    />
  ));
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
