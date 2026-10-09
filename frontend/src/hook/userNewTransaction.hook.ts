import { TransactionService } from "@/services/transaction.service";
import type { TransactionFormData,} from "@/types/transactionSchema.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Transaction_QUERY_KEYS = {
  Transaction: ["Transactions"],
  getsaving: ["getsaving"],
  goal: ["goals"],
};

export const useTransaction = () => {
  const queryClient = useQueryClient();
  // invalidate all queries
  const invalidateAllQueries = () => {
    Promise.all(
      Object.values(Transaction_QUERY_KEYS).map((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      }),
    );
  };

  const getTransactionQuery = useQuery({
    queryKey: Transaction_QUERY_KEYS.Transaction,
    queryFn: TransactionService.getTransaction,
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
