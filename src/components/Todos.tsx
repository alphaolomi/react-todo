
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: Todo[];
  markComplete: (id: Todo["id"]) => void;
  delTodo: (id: Todo["id"]) => void;
}

const Todos = ({ todos, markComplete, delTodo }: TodosProps) => {
  return (
    <ul
      style={{
        listStyle: "none",
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
