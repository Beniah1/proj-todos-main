import { useState } from "react";
import { useDeleteTodo } from "./useDeleteTodo";
import { useUpdateTodo } from "./useUpdateTodo";
import UpdateTodoForm from "./UpdateTodoForm";

function TodoItem({ todo }) {
  const [editTodo, setEditTodo] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed || false);
  const { mutate: deleteTodo, isPending: isDeleting, isError: isDeleteError, error: deleteError } = useDeleteTodo();
  const { mutate: updateTodo, isPending: isUpdating, isError: isUpdateError, error: updateError } = useUpdateTodo();

  if (isDeleteError) return <p className="text-danger">{deleteError.message}</p>;
  if (isUpdateError) return <p className="text-danger">{updateError.message}</p>;

  const handleComplete = () => {
    const updatedTodo = { ...todo, completed: !isCompleted };
    updateTodo(updatedTodo, {
      onSuccess: () => {
        setIsCompleted(!isCompleted);
      },
    });
  };

  return (
    <>
      {editTodo ? (
        <UpdateTodoForm setEditTodo={setEditTodo} todo={todo} />
      ) : (
        <div className="list-group-item p-3 mb-2 shadow-sm">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <h5 className={`mb-1 ${isCompleted ? 'text-decoration-line-through' : ''}`}>{todo.title}</h5>
            <div>
              <button
                className={`btn btn-sm ${isCompleted ? 'btn-outline-secondary' : 'btn-outline-success'} me-2`}
                onClick={handleComplete}
              >
                {isCompleted ? 'Undo' : 'Complete'}
              </button>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setEditTodo(true)}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTodo(todo.id)}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting' : 'Delete'}
              </button>
            </div>
          </div>
          <p className={`mb-1 ${isCompleted ? 'text-decoration-line-through' : ''}`}>{todo.description}</p>
        </div>
      )}
    </>
  );
}

export default TodoItem;