import { expenseService } from "@/services/expense.service";
import type { ExpenseFormData,} from "@/types/expenseSchema.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EXPENSEINCOME_QUERY_KEYS = {
  expenseIncome: ["expensesincome"],
  getsaving: ["getsaving"],
  goal: ["goals"],
};

export const useExpenseIncome = () => {
  const queryClient = useQueryClient();
  // invalidate all queries
  const invalidateAllQueries = () => {
    Promise.all(
      Object.values(EXPENSEINCOME_QUERY_KEYS).map((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      }),
    );
  };

  const getExpenseIncomeQuery = useQuery({
    queryKey: EXPENSEINCOME_QUERY_KEYS.expenseIncome,
    queryFn: expenseService.getExpenseIncome,
  });

  const createExpenseMutation = useMutation({
    mutationFn: (data: ExpenseFormData) => expenseService.create(data),
    onSuccess: () => invalidateAllQueries(),
  });
  const updateExpenseMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ExpenseFormData }) =>
      expenseService.update(id, data),
    onSuccess: () => invalidateAllQueries(),
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: (id: string) => expenseService.delete(id),
    onSuccess: () => invalidateAllQueries(),
  });

  return {
    getExpenseIncomeQuery,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
  };
};
