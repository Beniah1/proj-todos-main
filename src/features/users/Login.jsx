import { useState } from "react";
import { useLogin } from "./useLogin";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("beniah@example.com");
  const [password, setPassword] = useState("12345678");
  const { mutate: login, isPending, isError, error } = useLogin();
  const navigate = useNavigate();

  if (isError) return <p>{error.message}</p>;

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ? `Loging in...` : `Login`}
        </button>
      </form>
      <p>
        Don&apos;t have an account? <Link to="/">Sign up</Link>
      </p>
    </>
  );
}

export default Login;
