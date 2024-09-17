import { useGetTodos } from "../users/useGetTodos";
import TodoItem from "./TodoItem";

function Todos() {
  const { data: todos, isLoading, isError, error } = useGetTodos();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;
  // console.log(todos);
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
