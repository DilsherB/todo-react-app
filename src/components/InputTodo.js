const InputTodo = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="inputWrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Add to do..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="addBtn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
export default InputTodo;
