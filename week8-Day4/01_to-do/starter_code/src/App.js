// Default imports can be named anything
import { useState } from "react";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";
import "./App.css";

export default function App() {
  const [showTodos, setShowTodos] = useState(true);
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack",
  ]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <div className="App">
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>
      <h1>React To-Do</h1>
      <ToDoList todos={todos} />
      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}
