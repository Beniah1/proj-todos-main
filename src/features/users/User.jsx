import { useUser } from "./useUser";

function User() {
  const { user, isLoading, isError, error } = useUser();

  if (isLoading) return <p className="text-muted">Loading user...</p>;
  if (isError) return <p className="text-danger">{error.message}</p>;

  return (
    <div className="d-flex align-items-center">
      <span className="me-2">👤</span>
      <span>{user?.fullname || "Guest"}</span>
    </div>
  );
}

export default User;
