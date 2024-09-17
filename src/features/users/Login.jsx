import { useState } from "react";
import { useLogin } from "./useLogin";
import DarkModeToggle from "../../components/DarkModeToggle";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("beniah@example.com");
  const [password, setPassword] = useState("12345678");
  const { mutate: login, isPending, isError, error } = useLogin();
  const navigate = useNavigate();

  if (isError) return <p className="text-danger">{error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      }
    );
  }

  return (
    <div className="gradient-background min-vh-100 d-flex align-items-center">
      <div className="auth-container">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Login</h2>
              <DarkModeToggle />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="mt-3 text-center text-muted">
              Don't have an account? <Link to="/">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
