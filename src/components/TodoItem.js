import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TodoItem = ({ list, remove, edit }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todoList">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index}>
                <span>{entry}</span>
                <span className="delEdit">
                  <FaTrashAlt
                    className="deleteBtn"
                    onClick={() => {
                      remove(entry);
                    }}
                  ></FaTrashAlt>
                  <FaEdit />
                </span>
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
