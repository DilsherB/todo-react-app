const TodoItem = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todoList">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button
                className="deleteBtn"
                onClick={() => {
                  remove(entry);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No tasks found</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
