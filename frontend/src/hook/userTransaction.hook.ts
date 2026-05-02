import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  IdparticalTInterface,
  TInterface,
} from "../interface/transaction.interface";
import { transactionService } from "../services/transaction.service";

export const useTransaction = () => {
  const queryClient = useQueryClient();

  const getTransactionsQuery = useQuery<IdparticalTInterface[]>({
    queryKey: ["transactions"],
    queryFn: transactionService.getAll,
  });

  const transactionSummaryQuery = useQuery({
    queryKey: ["summary"],
    queryFn: transactionService.summary,
  });
  const createTransactionMutation = useMutation({
    mutationFn: (data: TInterface) => transactionService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
  });
  const updateTransactionMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TInterface }) =>
      transactionService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
  });

  const deleteTransactionMutation = useMutation({
    mutationFn: (id: string) => transactionService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
  });

  return {
    getTransactionsQuery,
    transactionSummaryQuery,
    createTransactionMutation,
    updateTransactionMutation,
    deleteTransactionMutation,
  };
};
