import { z } from "zod";

export const savingSchema = z.object({
  name: z.string().min(3, "Title must be at least 3 characters"),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
  goal: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  date: z.date(),
});

export const savingResponseSchema = z.object({
  amount: z
    .number({ error: "Please enter a valid number" })
    .max(999_999_999, "Amount exceeds maximum allowed"),
});

export type SavingFormData = z.infer<typeof savingSchema>;
export type SavingResponse = z.infer<typeof savingResponseSchema>;
