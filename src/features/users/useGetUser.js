import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getUser } from "../../services/apiUsers";

export function useGetUser() {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUser(userId),
  });

  return { data, isLoading, isError, error };
}
