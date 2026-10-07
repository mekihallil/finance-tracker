import type { LoginFormData, RegisterFormData } from "@/types/authSchema.type";
import { apiClient } from "./api.service";

export const authService = {
  userLogin: async (login: LoginFormData) => {
    const { data } = await apiClient.post("/auth/login", login);
    return data;
  },
  userRegister: async (register: RegisterFormData) => {
    const { data } = await apiClient.post("/auth/register", register);
    return data;
  },
};
