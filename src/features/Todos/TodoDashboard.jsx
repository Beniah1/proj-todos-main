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
      <div className="container-fluid py-5"> {/* Full-width container with padding */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-lg-9 col-xl-4"> {/* Responsive column widths */}
            <div className="card shadow"> {/* Card with shadow effect */}
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="mb-0">Todo Dashboard</h1>
                  <DarkModeToggle /> {/* Dark mode toggle button */}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <User /> {/* User information */}
                  <Logout /> {/* Logout button */}
                </div>
                <hr className="mb-4" />
                <TodoForm /> {/* Form to add new todos */}
                {user?.id && <Todos />} {/* List of todos if user is logged in */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDashboard;