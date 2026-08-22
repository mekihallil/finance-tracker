import { apiClient } from "./api.service";

export const goalService = {
  getAllGoals: async () => {
    const { data } = await apiClient.get("/goal/goals");
    return data;
  },
  updateGoals: async (id: string, amount: number) => {
    const { data } = await apiClient.patch(`/goal/update/${id}`, { amount });
    return data;
  },
};
