import { useState } from "react";
import { useAddTodos } from "./useAddTodos";
import { useSearchParams } from "react-router-dom";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: addTodo, isPending, isError, error } = useAddTodos();
  const [searchParams] = useSearchParams();

  if (isError) return <p>{error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;
    const id = Number(searchParams.get("user_id"));
    // console.log(id);

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        rows={10}
        cols={30}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? `Adding Todo...` : `Add Todo`}
      </button>
    </form>
  );
}

export default TodoForm;
