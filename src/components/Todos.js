import React from "react";
import TodoItem from "./TodoItem";


function Todos({todos, completeTodo, removeTodo}) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default Todos;

