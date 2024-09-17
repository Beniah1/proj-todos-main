import { useLogout } from "../users/useLogout";

function Logout() {
  const { mutate: logout, isPending, isError, error } = useLogout();

  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <button onClick={logout} disabled={isPending}>
        {isPending ? `Loging out...` : `Logout`}
      </button>
    </div>
  );
}

export default Logout;
