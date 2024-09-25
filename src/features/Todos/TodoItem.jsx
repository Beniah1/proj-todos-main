import { useState } from "react";
import { useDeleteTodo } from "./useDeleteTodo";
import { useUpdateTodo } from "./useUpdateTodo";
import UpdateTodoForm from "./UpdateTodoForm";

function TodoItem({ todo }) {
  const [editTodo, setEditTodo] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed || false);
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo();
  const { mutate: updateTodo, isPending: isUpdating } = useUpdateTodo();

  const handleComplete = () => {
    const updatedTodo = {
      ...todo,
      completed: !isCompleted,
    };
    updateTodo(updatedTodo, {
      onSuccess: () => {
        setIsCompleted(!isCompleted);
      },
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  if (editTodo) {
    return <UpdateTodoForm setEditTodo={setEditTodo} todo={todo} />;
  }

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-2">
          <h5 className={`card-title mb-2 mb-sm-0 ${isCompleted ? 'text-muted text-decoration-line-through' : ''}`} style={{ wordBreak: 'break-word' }}>
            {todo.title}
          </h5>
          <div className="btn-group d-none d-md-flex">
            <button
              className={`btn btn-sm ${isCompleted ? 'btn-outline-secondary' : 'btn-outline-success'}`}
              onClick={handleComplete}
              disabled={isUpdating}
            >
              {isUpdating ? 'Updating...' : isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => setEditTodo(true)}
            >
              Update
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
        <p className={`card-text mb-3 ${isCompleted ? 'text-muted text-decoration-line-through' : ''}`}>
          {todo.description}
        </p>
        <div className="d-flex d-md-none flex-column flex-sm-row justify-content-start align-items-start">
          <button
            className={`btn btn-sm ${isCompleted ? 'btn-outline-secondary' : 'btn-outline-success'} me-sm-2 mb-2 mb-sm-0`}
            onClick={handleComplete}
            disabled={isUpdating}
          >
            {isUpdating ? 'Updating...' : isCompleted ? 'Undo' : 'Complete'}
          </button>
          <button
            className="btn btn-sm btn-outline-primary me-sm-2 mb-2 mb-sm-0"
            onClick={() => setEditTodo(true)}
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-outline-danger mb-2 mb-sm-0"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;