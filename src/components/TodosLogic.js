import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
  const todos = [
    {
      id: 1,
      title: 'Create App "npx create-react-app [app-name]"',
      completed: true,
    },
    { id: 2, title: "Identify components", completed: true },
    { id: 3, title: "Build the logic and display them", completed: false },
    { id: 4, title: "Deploy the project", completed: false },
  ];
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
};

export default TodosLogic;
