import { useState } from "react";
import "../styles/TodoApp.css";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todoApp">
      <h1>React TODO App</h1>
      <InputTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoItem list={todos} remove={deleteTodo} edit={editTodo} />
    </div>
  );
};

export default TodoApp;
