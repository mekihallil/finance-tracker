import type { SavingFormData } from "@/types/savingSchema.tyes";
import { apiClient } from "./api.service";

export const savingService = {
  getGoalSaving: async () => {
    const { data } = await apiClient.get("/saving/getsaving");
    return data;
  },
  getGoals: async () => {
    const { data } = await apiClient.get("/saving/goals");
    return data;
  },
  create: async (saving: SavingFormData) => {
    const { data } = await apiClient.post("/saving/create", saving);
    return data;
  },
  AddMoney: async (id: string, amount: number) => {
    const { data } = await apiClient.patch(`/saving/update/${id}`, amount);
    return data;
  },
};
