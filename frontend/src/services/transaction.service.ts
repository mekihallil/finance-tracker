import type { TSInterface } from "../interface/summary.interface";
import type {
  IdparticalTInterface,
  TInterface,
} from "../interface/transaction.interface";
import { apiClient } from "./api.service";

export const transactionService = {
  getAll: async () => {
    const { data } = await apiClient.get<IdparticalTInterface[]>("/transaction");
    return data;
  },
  summary: async () => {
    const { data } = await apiClient.get<TSInterface>("/transaction/summary");
    return data;
  },
  create: async (transaction: TInterface) => {
    const { data } = await apiClient.post<TInterface>(
      "/transaction/create",
      transaction,
    );
    return data;
  },
  update: async (_id: string, transactions: TInterface) => {
    const { data } = await apiClient.patch<TInterface>(
      `/transaction/update/${_id}`,
      transactions,
    );
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`transaction/delete/${_id}`);
  },
};
