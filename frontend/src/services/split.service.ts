import type { splitFormData } from "@/types/splitSchema.types";
import { apiClient } from "./api.service";

export const splitBillService = {
  getSplitBills: async () => {
    const { data } = await apiClient.get("/split/splitBills");
    return data;
  },
  AddSplit: async (split: splitFormData) => {
    const { data } = await apiClient.post("/split/create", split);
    return data;
  },
};
