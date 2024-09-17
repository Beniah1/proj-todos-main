import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "../users/Logout";
import { useUser } from "../users/useUser";
import { useSearchParams } from "react-router-dom";
import User from "../users/User";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import DarkModeToggle from '../../components/DarkModeToggle';

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
    <div className="gradient-background min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="mb-0">Todo Dashboard</h1>
                  <DarkModeToggle />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <User />
                  <Logout />
                </div>
                <hr className="mb-4" />
                <TodoForm />
                {user?.id && <Todos />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDashboard;
