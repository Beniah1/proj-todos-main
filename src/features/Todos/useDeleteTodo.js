import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../services/apiTodos";
import { useSearchParams } from "react-router-dom";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const todoId = Number(searchParams.get("user_id"));

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", todoId] });
    },
  });

  return { mutate, isPending, isError, error };
}
