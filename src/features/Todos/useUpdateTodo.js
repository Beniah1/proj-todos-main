import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodos } from "../../services/apiTodos";
import { useSearchParams } from "react-router-dom";

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const todoId = Number(searchParams.get("user_id"));

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", todoId] });
    },
  });

  return { mutate, isPending, isError, error };
}
