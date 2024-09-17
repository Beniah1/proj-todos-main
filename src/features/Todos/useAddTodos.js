import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodos } from "../../services/apiTodos";
import { useSearchParams } from "react-router-dom";

export function useAddTodos() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("user_id"));

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", id] });
    },
  });

  return { mutate, isPending, isError, error };
}
