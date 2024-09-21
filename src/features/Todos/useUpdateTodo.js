import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo as updateTodoApi } from "../../services/apiTodos";

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { mutate, isPending, isError, error };
}
