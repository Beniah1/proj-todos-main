import { useLogout } from "../users/useLogout";

function Logout() {
  const { mutate: logout, isPending, isError, error } = useLogout();

  if (isError) return <p className="text-danger">{error.message}</p>;

  return (
    <button 
      onClick={logout} 
      disabled={isPending}
      className="btn btn-outline-danger"
    >
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}

export default Logout;
