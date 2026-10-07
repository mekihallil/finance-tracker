import { authService } from "@/services/auth.service";
import { type LoginFormData } from "@/types/authSchema.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const userLogin = useMutation({
    mutationFn: ({ email, password }: LoginFormData) =>
      authService.userLogin({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["splits"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });
  return { userLogin };
};
