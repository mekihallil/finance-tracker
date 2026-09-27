import type { TransactionFormData } from "@/types/transactionSchema.type";
import { apiClient } from "./api.service";

export const TransactionService = {
  getTransactionIncome: async () => {
    const { data } = await apiClient.get("/Transaction");
    return data;
  },
  create: async (Transaction: TransactionFormData) => {
    const { data } = await apiClient.post("/Transaction/create", Transaction);
    return data;
  },
  update: async (_id: string, Transactions: TransactionFormData) => {
    const { data } = await apiClient.patch(
      `/Transaction-income/update/${_id}`,
      Transactions,
    );
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`Transaction/delete/${_id}`);
  },
};
