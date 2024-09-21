import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodos } from "../../services/apiTodos";
// import { updateTodo as updateTodoApi } from "../../services/apiTodos";

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { mutate, isPending, isError, error };
}
