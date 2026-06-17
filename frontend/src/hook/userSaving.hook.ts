import { savingService } from "@/services/saving.service";
import type { SavingFormData } from "@/types/savingSchema.tyes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSaving = () => {
  const queryClient = useQueryClient();
  const getSavings = useQuery({
    queryKey: ["getsaving"],
    queryFn: savingService.getGoalSaving,
  });
  const goals = useQuery({
    queryKey: ["goals"],
    queryFn: savingService.getGoals,
  });
  const createSaving = useMutation({
    mutationFn: (data: SavingFormData) => savingService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getsaving"] });
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });

  return { getSavings, goals, createSaving };
};
