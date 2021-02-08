import React, { useState, useEffect } from "react";
import * as uuid from "uuid";
import axios from "axios";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import { List } from "react-bulma-components";
interface Todo {
  id: string;
  title: string;
  completed: string;
}

const Home = (props: any) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res.data));
  }, []);

  // Toggle Complete
  const markComplete = (id: string) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Delete Todo
  const delTodo = (id: string) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  };

  // Add Todo
  const addTodo = (title: string) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        res.data.id = uuid.v4();
        setTodos([...todos, res.data]);
      });
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <List hoverable>
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
      </List>
    </>
  );
};

export default Home;
