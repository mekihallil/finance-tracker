import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSaving } from "@/hook/userSaving.hook";
import {
  savingResponseSchema,
  type SavingResponse,
} from "@/types/savingSchema.tyes";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Loader2 } from "lucide-react";
import type { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useEffect, useState } from "react";

type AddMoneyPopoverProps = {
  savingId: string;
  isComplete: number;
};

export const AddMoneyPopover: FC<AddMoneyPopoverProps> = ({
  savingId,
  isComplete,
}): ReactElement => {
  const { AddMoney } = useSaving();
  const [open, setOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SavingResponse>({
    resolver: zodResolver(savingResponseSchema),
  });

  useEffect(() => {
    if (errors.amount?.message) {
      toast.error(errors.amount.message);
    }
  }, [errors.amount?.message]);

  const onSubmit = ({ amount }: SavingResponse) => {
    AddMoney.mutate(
      { id: savingId, amount },
      {
        onSuccess() {
          toast.success("Amount added successfully!");
          reset();
          setOpen(false);
        },
        onError: () => {
          toast.error("Failed to amount add");
        },
      },
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <DollarSign size={15} className="my-auto" /> Add Money
        </Button>
      </PopoverTrigger>
      <section>
        {!isComplete && (
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">
                  Enter contribution amount:
                </h4>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      min={0}
                      placeholder="0.00"
                      className="col-span-2 h-8"
                      {...register("amount", { valueAsNumber: true })}
                    />
                  </div>
                  {errors.amount && (
                    <span className="text-xs text-red-500 font-medium">
                      {errors.amount.message}
                      {toast.error(`${errors.amount.message}`)}
                    </span>
                  )}
                  <Button
                    disabled={AddMoney.isPending}
                    type="submit"
                    variant="outline"
                  >
                    {AddMoney.isPending ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </PopoverContent>
        )}
      </section>
    </Popover>
  );
};
