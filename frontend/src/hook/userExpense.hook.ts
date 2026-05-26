import { expenseService } from "@/services/expense.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  EInterface,
  IdparticalEInterface,
} from "../interface/expense.interface";

export const useExpense = () => {
  const queryClient = useQueryClient();

  const getExpensesQuery = useQuery<IdparticalEInterface[]>({
    queryKey: ["expenses"],
    queryFn: expenseService.getAll,
  });

  const expenseSummaryQuery = useQuery({
    queryKey: ["summary"],
    queryFn: expenseService.summary,
  });
  const expenseMonthlyQuery = useQuery({
    queryKey: ["monthly"],
    queryFn: expenseService.monthlyExpense,
  });
  const createExpenseMutation = useMutation({
    mutationFn: (data: EInterface) => expenseService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["monthly"] });
    },
  });
  const updateExpenseMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: EInterface }) =>
      expenseService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["monthly"] });
    },
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: (id: string) => expenseService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["monthly"] });
    },
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
