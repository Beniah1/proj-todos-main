import { useEffect } from "react";
import { useGetUser } from "../users/useGetUser";
import { useSearchParams } from "react-router-dom";

function User() {
  const { data, isLoading, isError, error } = useGetUser();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(data);

  useEffect(
    function () {
      if (data) {
        searchParams.set("user_id", data.id);
        setSearchParams(searchParams);
      }
    },
    [data, searchParams, setSearchParams]
  );

  if (isLoading) return <p>Loading user data...</p>;

  if (isError) return <p>{error.message}</p>;

  // console.log(data);
  return (
    <div>
      <h2>Welcome, {data.fullname.split(" ").at(0)}!</h2>
    </div>
  );
}

export default User;
