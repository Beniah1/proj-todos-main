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
import Login from "../users/Login"; // Ensure you import the Login component

function TodoDashboard() {
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  if (!user) {
    return <Login />; // Render Login if user is not logged in
  }

  return (
    <div className="gradient-background min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card shadow-lg rounded-3">
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
                {/* {user?.id && <TodoList />} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDashboard;