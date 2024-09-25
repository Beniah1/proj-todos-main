import { useState } from "react";
import { useAddTodos } from "./useAddTodos";
import { useSearchParams } from "react-router-dom";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: addTodo, isPending, isError, error } = useAddTodos();
  const [searchParams] = useSearchParams();

  if (isError) return <p className="text-danger">{error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;
    const id = Number(searchParams.get("user_id"));
    addTodo(
      { todo_id: id, title, description },
      {
        onSettled: () => {
          setTitle("");
          setDescription("");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-custom-color btn-lg w-100" disabled={isPending}>
  {isPending ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Adding Todo...
    </>
  ) : (
    'Add Todo'
  )}
</button>
    </form>
  );

}

export default TodoForm;
