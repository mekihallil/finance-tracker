import { savingService } from "@/services/saving.service";
import { useQuery } from "@tanstack/react-query";

export const useSaving = () => {
  const getSavings = useQuery({
    queryKey: ["getsaving"],
    queryFn: savingService.getGoalSaving,
  });
  const goals = useQuery({
    queryKey: ["goals"],
    queryFn: savingService.getGoals,
  });

  return {  getSavings, goals };
};
