import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="header">
        <h1>TODOs</h1>
        <p>Manage your day to day tasks here...</p>
      </div>
      <form>
        <input type="text" placeholder="Add to do..." />
        <button className="plusIcon">
          <FaPlusCircle />
        </button>
      </form>
    </>
  );
};
export default InputTodo;
