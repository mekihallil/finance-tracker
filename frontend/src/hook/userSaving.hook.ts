import { goalService } from "@/services/goal.service";
import { savingService } from "@/services/saving.service";
import type { SavingFormData } from "@/types/savingSchema.tyes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const SAVING_QUERY_KEYS = {
  saving: ["getsaving"],
  goals: ["goals"],
} as const;

export const useSaving = () => {
  const queryClient = useQueryClient();

  const invalidateAllQueries = () =>
    Promise.all(
      Object.values(SAVING_QUERY_KEYS).map((queryKey) =>
        queryClient.invalidateQueries({ queryKey }),
      ),
    );

  const savingQuery = useQuery({
    queryKey: SAVING_QUERY_KEYS.saving,
    queryFn: savingService.getGoalSaving,
  });

  const goalsQuery = useQuery({
    queryKey: SAVING_QUERY_KEYS.goals,
    queryFn: goalService.getAllGoals,
  });

  const createSavingMutation = useMutation({
    mutationFn: (data: SavingFormData) => savingService.create(data),
    onSuccess: invalidateAllQueries,
  });

  const AddMoney = useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      goalService.updateGoals(id, amount),
    onSuccess: invalidateAllQueries,
  });
  return { savingQuery, goalsQuery, createSavingMutation, AddMoney };
};
