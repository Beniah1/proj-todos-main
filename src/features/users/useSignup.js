import { useMutation } from "@tanstack/react-query";
import { userSignUp } from "../../services/apiAuth";

export function useSignup() {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: userSignUp,
  });

  return { mutate, isPending, isError, error };
}
