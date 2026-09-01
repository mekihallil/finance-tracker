import { splitBillService } from "@/services/split.service";
import { useQuery } from "@tanstack/react-query";

export const useSplit = () => {
  const getSplitQuery = useQuery({
    queryKey: ["getSplit"],
    queryFn: splitBillService.getSplitBills,
  });
  return { getSplitQuery };
};
