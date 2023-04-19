import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ itemProp }) => {
  const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState("");
  const handleCheckbox = () => {
    console.log("checked");
  };
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo !== id;
    });
    setTodos(newTodos);
  };
  const handleEdit = () => {
    console.log("edited");
  };
  return (
    <li>
      <input type="checkbox" onClick={handleCheckbox}></input>
      <div id="itemTitle">{itemProp.title}</div>
      <FaEdit
        className="editIcon"
        style={{ margin: "0 2%" }}
        size="20px"
        onClick={handleEdit}
      />
      <FaTrash
        className="deleteIcon"
        style={{ margin: "0 2%" }}
        color="red"
        onClick={handleDelete}
      />
    </li>
  );
};

export default TodoItem;
