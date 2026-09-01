import { apiClient } from "./api.service";

export const splitBillService = {
  getSplitBills: async () => {
    const { data } = await apiClient.get("/split/splitBills");
    return data;
  },
};
