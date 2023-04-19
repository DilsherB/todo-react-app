// import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  // const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <div className="header">
        <h1>TODOs</h1>
        <p>Manage your day to day tasks here...</p>
      </div>
      <form>
        <input type="text" placeholder="Add to do..." onChange={handleSubmit} />
        <button className="plusIcon" type="submit">
          <FaPlusCircle />
        </button>
      </form>
    </>
  );
};
export default InputTodo;
