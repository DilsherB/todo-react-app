import { FaTrash, FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todoList">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index}>
                {entry}
                <FaTrashAlt />
                <FaTrash
                  className="deleteBtn"
                  onClick={() => {
                    remove(entry);
                  }}
                ></FaTrash>
              </li>
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
