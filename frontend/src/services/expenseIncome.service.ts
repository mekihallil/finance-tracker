import type { ExpenseFormData } from "@/types/expenseSchema.type";
import { apiClient } from "./api.service";

export const expenseService = {
  getExpenseIncome: async () => {
    const { data } = await apiClient.get("/expense-income");
    return data;
  },
  create: async (expense: ExpenseFormData) => {
    const { data } = await apiClient.post("/expense-income/create", expense);
    return data;
  },
  update: async (_id: string, expenses: ExpenseFormData) => {
    const { data } = await apiClient.patch(
      `/expense-income/update/${_id}`,
      expenses,
    );
    return data;
  },
  delete: async (_id: string) => {
    await apiClient.delete(`expense/delete/${_id}`);
  },
};
