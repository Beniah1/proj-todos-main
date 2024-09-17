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
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          rows={3}
          placeholder="Enter description"
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={() => setEditTodo(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}

export default UpdateTodoForm;
