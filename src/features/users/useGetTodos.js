import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../../services/apiTodos";
import { useSearchParams } from "react-router-dom";

export function useGetTodos() {
  const [searchParams] = useSearchParams();
  const todoId = Number(searchParams.get("user_id"));

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getAllTodos(todoId),
  });

  return { data, isLoading, isError, error };
}
