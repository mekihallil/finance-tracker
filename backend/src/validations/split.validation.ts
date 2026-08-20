import { z } from "zod";

export const splitValidatorSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  amount: z.number().min(0, "Amount cannot be negative"),
  participants: z
    .array(
      z.object({
        name: z.string().min(3, "name must be at least 3 characters long"),
        email: z.string(),
      }),
    )
    .min(1, "At least one Participants is required"),
});
export type ISplit = z.infer<typeof splitValidatorSchema>;
