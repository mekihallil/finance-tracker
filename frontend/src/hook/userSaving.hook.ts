import { savingService } from "@/services/saving.service";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const UserSaving = () => {
  const queryClient = useQueryClient();

  const getSavings = useQuery({
    queryKey: ["getsaving"],
    queryFn: savingService.getGoalSaving,
  });
  return getSavings;
};
