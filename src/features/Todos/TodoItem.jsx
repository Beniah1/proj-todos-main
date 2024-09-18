import { useState } from "react";
import { useDeleteTodo } from "./useDeleteTodo";
import UpdateTodoForm from "./UpdateTodoForm";


function TodoItem({ todo }) {
  const [editTodo, setEditTodo] = useState(false);
  const { mutate: deleteTodo, isPending, isError, error } = useDeleteTodo();

  if (isError) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      {editTodo ? (
        <UpdateTodoForm setEditTodo={setEditTodo} todo={todo} />
      ) : (
        <div className="list-group-item p-3 mb-2 shadow-sm">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <h5 className="mb-1">{todo.title}</h5>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setEditTodo(true)}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTodo(todo.id)}
                disabled={isPending}
              >
                {isPending ? `Deleting` : `Delete`}
              </button>
            </div>
          </div>
          <p className="mb-1">{todo.description}</p>
        </div>
      )}
    </>
  );
}

export default TodoItem;
