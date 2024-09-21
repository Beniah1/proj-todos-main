import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";
import DarkModeToggle from "../../components/DarkModeToggle";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signup, isPending, isError, error } = useSignup();
  const navigate = useNavigate();

  if (isError) return <p>{error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    signup(
      { email, password, fullname },
      {
        onSuccess: () => {
          navigate("/login");
        },
        onSettled: () => {
          setEmail("");
          setPassword("");
          setFullname("");
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
          <h2 className="mb-0 mx-auto">Sign Up</h2>
          <DarkModeToggle />
        </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
                {isPending ? "Signing up..." : "Sign Up"}
              </button>
            </form>
            <p className="mt-3 text-center text-muted">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
