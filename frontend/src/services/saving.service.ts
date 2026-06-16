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
};
