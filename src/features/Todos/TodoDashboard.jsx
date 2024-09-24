import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoDashboard.css';
import Logout from "../users/Logout";
import { useUser } from "../users/useUser";
import { useSearchParams } from "react-router-dom";
import User from "../users/User";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import DarkModeToggle from '../../components/DarkModeToggle';
import Login from "../users/Login";

function TodoDashboard() {
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(
    function () {
      if (user) {
        searchParams.set("userId", user.id);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams, user]
  );

  if (!user) {
    return <Login />;
  }

  return (
    <div className="gradient-background min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card apple-card shadow-lg rounded-3">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="h3 mb-0 text-primary">Todo Dashboard</h1>
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