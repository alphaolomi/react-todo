import React from "react";


function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
      // <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
      //   {todo.text}
      //   <div>
      //     <button onClick={() => completeTodo(index)}>Complete</button>
      //     <button onClick={() => removeTodo(index)}>x</button>
      //   </div>
      // </div>

      <div className="flex mb-4 items-center">
          <p className="w-full text-grey-darkest"> {todo.text}</p>
          <button
              onClick={() => completeTodo(index)}
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done
          </button>
          <button
              onClick={() => removeTodo(index)}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove
          </button>
      </div>
  );
}

export default TodoItem;
