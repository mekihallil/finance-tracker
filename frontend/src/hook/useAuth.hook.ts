import { authService } from "@/services/auth.service";
import {
  type LoginFormData,
  type RegisterFormData,
} from "@/types/authSchema.type";
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

  const userRegister = useMutation({
    mutationFn: ({ name, email, password }: RegisterFormData) =>
      authService.userRegister({ name, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["splits"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });
  return { userLogin, userRegister };
};
