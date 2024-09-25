// Import necessary dependencies and components
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
  // Get the current user and search params
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  // Update search params with user ID when user is available
  useEffect(() => {
    if (user) {
      searchParams.set("userId", user.id);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, user]);

  // If no user is logged in, show the Login component
  if (!user) {
    return <Login />;
  }

  // Main dashboard layout
  return (
    <div className="gradient-background min-vh-100 d-flex flex-column">
      {/* Header section */}
      <header className="bg-body-tertiary shadow-sm py-4 transition-bg">
        <div className="container">
          <div className="row align-items-center">
            {/* Dashboard title */}
            <div className="col">
              <h1 className="h2 mb-0 fw-bold text-primary">Todo Dashboard</h1>
            </div>
            {/* User component */}
            <div className="col-auto">
              <User />
            </div>
            {/* Dark mode toggle */}
            <div className="col-auto">
              <DarkModeToggle />
            </div>
            {/* Logout button */}
            <div className="col-auto">
              <Logout />
            </div>
          </div>
        </div>
      </header>
      {/* Main content area */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Reduced width: col-lg-6 instead of col-lg-8 */}
            <div className="col-12 col-md-8 col-lg-7">
              {/* Todo dashboard card */}
              <div className="todo-dashboard card shadow-lg rounded-3 overflow-hidden">
                <div className="card-body p-4">
                  {/* Add new todo section */}
                  <div className="add-new-todo mb-4">
                    <h2 className="h4 mb-4 fw-bold">Add New Todo</h2>
                    <TodoForm />
                  </div>
                  <hr className="my-4" />
                  {/* List of user's todos */}
                  <h2 className="h4 mb-4 fw-bold">Your Todos</h2>
                  {user?.id && <Todos />}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TodoDashboard;