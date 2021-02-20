import React from "react";
import PropTypes from "prop-types";
import { List } from "react-bulma-components";
const TodoItem = (props: any) => {
  // const getStyle = {
  //   background: "#f4f4f4",
  //   padding: "10px",
  //   borderBottom: "1px #ccc dotted",
  //   textDecoration: props.todo.completed ? "line-through" : "none",
  // };

  // const { id, title } = props.todo;
  // return (
  //   <div style={getStyle}>
  //     <p>
  //       <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
  //       {title}
  //       <button
  //         onClick={props.delTodo.bind(this, id)}
  //         style={{
  //           background: "#ff0000",
  //           color: "#fff",
  //           border: "none",
  //           padding: "5px 9px",
  //           borderRadius: "50%",
  //           cursor: "pointer",
  //           float: "right",
  //         }}
  //       >
  //         x
  //       </button>
  //     </p>
  //   </div>
  // );

  const { id, title } = props.todo;
  return (
    <List.Item>
      <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
      {title}{" "}
      <button className="delete" onClick={props.delTodo.bind(this, id)} />
    </List.Item>
  );
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
