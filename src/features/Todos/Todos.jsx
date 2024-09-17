import { useGetTodos } from "../users/useGetTodos";
import TodoItem from "./TodoItem";

function Todos() {
  const { data: todos, isLoading, isError, error } = useGetTodos();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-danger">{error.message}</p>;

  return (
    <div className="list-group">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
