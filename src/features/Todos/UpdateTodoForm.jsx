import { useState } from "react";
import { useUpdateTodo } from "./useUpdateTodo";

function UpdateTodoForm({ todo, setEditTodo }) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const { mutate: updateTodo, isPending, isError, error } = useUpdateTodo();

  if (isError) return <p className="text-danger">{error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(
      { id: todo.id, title: editTitle, description: editDescription },
      {
        onSuccess: () => {
          setEditTodo(false);
        },
      }
    );
  }

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">Update Todo</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="editTitle" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="editTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editDescription" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="editDescription"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              rows={3}
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={() => setEditTodo(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isPending}>
              {isPending ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Updating...
                </>
              ) : (
                'Update Todo'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodoForm;