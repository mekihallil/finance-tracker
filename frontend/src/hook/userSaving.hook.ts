import { savingService } from "@/services/saving.service";
import { useQuery } from "@tanstack/react-query";

export const useSaving = () => {
  const getSavings = useQuery({
    queryKey: ["getsaving"],
    queryFn: savingService.getGoalSaving,
  });
  return getSavings;
};
