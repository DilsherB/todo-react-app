import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  const [todo, setTodo] = useState("");
  return (
    <>
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
