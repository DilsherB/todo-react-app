import "../styles/TodoApp.css";
import Header from "./Header";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <>
      <Header />
      <TodosLogic />
    </>
  );
};

export default TodoApp;
