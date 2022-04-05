import { useState, useEffect } from "react";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import { Todo } from "../types";
import Page from "../components/layout/Page";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const LIMIT = 10;

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  let controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch(`${BASE_URL}/todos?_limit=${LIMIT}`, { signal })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  const markComplete = (id: Todo["id"]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const delTodo = (id: string) => {
    fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (title: Todo["title"]) => {
    fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
      });
  };

  return (
    <Page>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
    </Page>
  );
};

export default Home;
