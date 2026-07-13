import { z } from "zod";

export const savingSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Title must be at least 3 characters"),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
  amount: z.number().min(0, "Amount cannot be negative"),
  goal: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  date: z.date(),
  createdAt: z.date().optional(),
});
export const addMoneySchema = savingSchema.extend({
  amount: z.number().positive("Amount must be greater than 0"),
});

export type AddMoneyFormData = z.infer<typeof addMoneySchema>;
export type SavingFormData = z.infer<typeof savingSchema>;
