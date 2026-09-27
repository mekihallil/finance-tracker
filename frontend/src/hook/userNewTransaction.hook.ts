import { TransactionService } from "@/services/transaction.service";
import type { TransactionFormData,} from "@/types/transactionSchema.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TransactionINCOME_QUERY_KEYS = {
  TransactionIncome: ["Transactionsincome"],
  getsaving: ["getsaving"],
  goal: ["goals"],
};

export const useTransaction = () => {
  const queryClient = useQueryClient();
  // invalidate all queries
  const invalidateAllQueries = () => {
    Promise.all(
      Object.values(TransactionINCOME_QUERY_KEYS).map((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      }),
    );
  };

  const getTransactionQuery = useQuery({
    queryKey: TransactionINCOME_QUERY_KEYS.TransactionIncome,
    queryFn: TransactionService.getTransactionIncome,
  });

  const createTransactionMutation = useMutation({
    mutationFn: (data: TransactionFormData) => TransactionService.create(data),
    onSuccess: () => invalidateAllQueries(),
  });
  const updateTransactionMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TransactionFormData }) =>
      TransactionService.update(id, data),
    onSuccess: () => invalidateAllQueries(),
  });

  const deleteTransactionMutation = useMutation({
    mutationFn: (id: string) => TransactionService.delete(id),
    onSuccess: () => invalidateAllQueries(),
  });

  return {
    getTransactionQuery,
    createTransactionMutation,
    updateTransactionMutation,
    deleteTransactionMutation,
  };
};
