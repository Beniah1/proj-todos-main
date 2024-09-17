import { useState } from "react";
import { useDeleteTodo } from "./useDeleteTodo";
import UpdateTodoForm from "./UpdateTodoForm";

function TodoItem({ todo }) {
  const [editTodo, setEditTodo] = useState(false);
  const { mutate: deleteTodo, isPending, isError, error } = useDeleteTodo();

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {editTodo ? (
        <UpdateTodoForm setEditTodo={setEditTodo} todo={todo} />
      ) : (
        <li>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => setEditTodo(true)}>Update</button>
          <button onClick={() => deleteTodo(todo.id)} disabled={isPending}>
            {isPending ? `Deleting` : `Delete`}
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem;
