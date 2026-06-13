import { apiClient } from "./api.service";

export const savingService = {
  getGoalSaving: async () => {
    const { data } = await apiClient.get("/getsaving");
    return data;
  },
};
