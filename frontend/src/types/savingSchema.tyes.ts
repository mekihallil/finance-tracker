import { z } from "zod";

export const savingSchema = z.object({
  _id: z.string(),
  name: z.string().min(3, "Title must be at least 3 characters"),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
  amount: z
    .number({ error: "Please enter a valid number" })
    .max(999_999_999, "Amount exceeds maximum allowed"),
  goal: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  date: z.date(),
  createdAt: z.date(),
});

export type SavingFormData = z.infer<typeof savingSchema>;
