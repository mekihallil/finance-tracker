import { z } from "zod";

export const savingSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  amount: z
    .float64({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
  targetDate: z.date(),
});

export type SavingFormData = z.infer<typeof savingSchema>;
