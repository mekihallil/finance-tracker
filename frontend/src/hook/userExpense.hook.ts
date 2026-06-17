import { expenseService } from "@/services/expense.service";
import type { ExpenseFormData } from "@/types/expenseSchema.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EXPENSE_QUERY_KEYS = {
  expense: ["expenses"],
  monthly: ["monthly"],
  summary: ["summary"],
  getsaving: ["getsaving"],
  goal: ["goals"],
};

export const useExpense = () => {
  const queryClient = useQueryClient();
  // invalidate all queries
  const invalidateAllQueries = () => {
    Promise.all(
      Object.values(EXPENSE_QUERY_KEYS).map((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      }),
    );
  };

  const getExpensesQuery = useQuery<ExpenseFormData[]>({
    queryKey: EXPENSE_QUERY_KEYS.expense,
    queryFn: expenseService.getAll,
  });

  const expenseSummaryQuery = useQuery({
    queryKey: EXPENSE_QUERY_KEYS.summary,
    queryFn: expenseService.summary,
  });
  const expenseMonthlyQuery = useQuery({
    queryKey: EXPENSE_QUERY_KEYS.monthly,
    queryFn: expenseService.monthlyExpense,
  });
  const createExpenseMutation = useMutation({
    mutationFn: (data: ExpenseFormData) => expenseService.create(data),
    onSuccess: () => invalidateAllQueries,
  });
  const updateExpenseMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ExpenseFormData }) =>
      expenseService.update(id, data),
    onSuccess: () => invalidateAllQueries,
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: (id: string) => expenseService.delete(id),
    onSuccess: () => invalidateAllQueries,
  });

  return {
    getExpensesQuery,
    expenseSummaryQuery,
    expenseMonthlyQuery,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
  };
};
