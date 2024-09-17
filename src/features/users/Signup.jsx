import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";

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
        },
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Enter your full name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ? `Submitting` : `Submit`}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Signup;
