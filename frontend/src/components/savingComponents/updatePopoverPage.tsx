import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DollarSign } from "lucide-react";

export function UpdatePopoverPage() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <DollarSign size={15} className="my-auto" /> Add Money
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">
              Enter contribution amount:
            </h4>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Amount</Label>
              <Input id="amount" defaultValue="" className="col-span-2 h-8" />
            </div>
            <Button variant="outline">Submit</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
