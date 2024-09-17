import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: userLogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
    },
    gcTime: Infinity,
  });

  return { mutate, isPending, isError, error };
}
