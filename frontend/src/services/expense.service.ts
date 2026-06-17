import type { ExpenseFormData } from "@/types/expenseSchema.type";
import { apiClient } from "./api.service";

export const expenseService = {
  getAll: async () => {
    const { data } = await apiClient.get("/expense");
    return data;
  },
  summary: async () => {
    const { data } = await apiClient.get("/expense/summary");
    return data;
  },
  create: async (expense: ExpenseFormData) => {
    const { data } = await apiClient.post("/expense/create", expense);
    return data;
  },
  update: async (_id: string, expenses: ExpenseFormData) => {
    const { data } = await apiClient.patch(`/expense/update/${_id}`, expenses);
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`expense/delete/${_id}`);
  },
  monthlyExpense: async () => {
    const { data } = await apiClient.get("/expense/monthly-expense");
    return data;
  },
};
