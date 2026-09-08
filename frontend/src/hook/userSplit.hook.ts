import { splitBillService } from "@/services/split.service";
import type { splitFormData } from "@/types/splitSchema.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSplit = () => {
  const queryClient = useQueryClient();
  const getSplitQuery = useQuery({
    queryKey: ["getSplit"],
    queryFn: splitBillService.getSplitBills,
  });
  const AddSplitMutation= useMutation({
    mutationFn: (data: splitFormData) => splitBillService.AddSplit(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getSplit"] }),
  });
  return { getSplitQuery, AddSplitMutation };
};
