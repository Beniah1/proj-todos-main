import { useEffect } from "react";
import Logout from "../users/Logout";
// import { useAddTodos } from "./useAddTodos";
import { useUser } from "../users/useUser";
import { useSearchParams } from "react-router-dom";
import User from "../users/User";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

function TodoDashboard() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const { mutate: addTodo, isPending, isError, error } = useAddTodos();
  // This is the user meta data
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(user);

  useEffect(
    function () {
      if (user) {
        searchParams.set("userId", user.id);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams, user]
  );

  // if (isError) return <p>{error.message}</p>;

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (!title || !description) return;

  //   addTodo({ title, description });
  // }

  return (
    <div>
      <h1>Todo Dashboard</h1>
      <User />
      <Logout />
      <br />
      <TodoForm />
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
      {user?.id && <Todos />}
    </div>
  );
}

export default TodoDashboard;
