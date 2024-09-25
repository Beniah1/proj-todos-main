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
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className={`card-title mb-0 ${isCompleted ? 'text-muted text-decoration-line-through' : ''}`}>
            {todo.title}
          </h5>
          <div className="btn-group">
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
        <p className={`card-text ${isCompleted ? 'text-muted text-decoration-line-through' : ''}`}>
          {todo.description}
        </p>
      </div>
    </div>
  );
}

export default TodoItem;