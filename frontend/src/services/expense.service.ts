import type { ExpenseFormData } from "@/types/expenseSchema.type";
import { apiClient } from "./api.service";

export const expenseService = {
  getAll: async () => {
    const { data } = await apiClient.get("/expense-income");
    return data;
  },
  summary: async () => {
    const { data } = await apiClient.get("/expense-income/summary");
    return data;
  },
  create: async (expense: ExpenseFormData) => {
    const { data } = await apiClient.post("/expense-income/create", expense);
    return data;
  },
  update: async (_id: string, expenses: ExpenseFormData) => {
    const { data } = await apiClient.patch(`/expense-income/update/${_id}`, expenses);
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`expense/delete/${_id}`);
  },
  monthlyExpense: async () => {
    const { data } = await apiClient.get("/expense-income/monthly-expense");
    return data;
  },
};
