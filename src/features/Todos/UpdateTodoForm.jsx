import { useState } from "react";
import { useUpdateTodo } from "./useUpdateTodo";

function UpdateTodoForm({ todo, setEditTodo }) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const { mutate: updateTodo, isPending, isError, error } = useUpdateTodo();

  if (isError) return <p>{error.message}</p>;

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <textarea
        value={editDescription}
        onChange={(e) => setEditDescription(e.target.value)}
        rows={10}
        cols={30}
      ></textarea>
      <button type="submit" disabled={isPending}>
        {isPending ? `Submitting...` : `Submit`}
      </button>
      <button onClick={() => setEditTodo(false)}>Cancel</button>
    </form>
  );
}

export default UpdateTodoForm;
