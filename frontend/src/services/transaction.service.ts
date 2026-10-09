import type { TransactionFormData } from "@/types/transactionSchema.type";
import { apiClient } from "./api.service";

export const TransactionService = {
  getTransaction: async () => {
    const { data } = await apiClient.get("/transaction");
    return data;
  },
  create: async (Transaction: TransactionFormData) => {
    const { data } = await apiClient.post("/transaction/create", Transaction);
    return data;
  },
  update: async (_id: string, Transactions: TransactionFormData) => {
    const { data } = await apiClient.patch(
      `/transaction/update/${_id}`,
      Transactions,
    );
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`transaction/delete/${_id}`);
  },
};
