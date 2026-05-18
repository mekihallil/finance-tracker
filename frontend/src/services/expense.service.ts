import type { TSInterface } from "../interface/summary.interface";
import type {
  IdparticalEInterface,
  EInterface,
} from "../interface/expense.interface";
import { apiClient } from "./api.service";

export const expenseService = {
  getAll: async () => {
    const { data } = await apiClient.get<IdparticalEInterface[]>("/expense");
    return data;
  },
  summary: async () => {
    const { data } = await apiClient.get<TSInterface>("/expense/summary");
    return data;
  },
  create: async (expense: EInterface) => {
    const { data } = await apiClient.post<EInterface>(
      "/expense/create",
      expense,
    );
    return data;
  },
  update: async (_id: string, expenses: EInterface) => {
    const { data } = await apiClient.patch<EInterface>(
      `/expense/update/${_id}`,
      expenses,
    );
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`expense/delete/${_id}`);
  },
};
