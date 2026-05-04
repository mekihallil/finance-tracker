import { z } from "zod";

export const transactionSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  amount: z.number().positive("Amount must be a positive number"),
  type: z.enum(["income", "expense"]),
  category: z.string().min(1, "Please select a category"),
});

export type TransactionFormData = z.infer<typeof transactionSchema>;
