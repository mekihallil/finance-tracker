import { z } from "zod";

export const TransactionSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  amount: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  type: z.enum(["income", "Transaction"]),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
});

export const TransactionSchemaWithIdAndDate = TransactionSchema.extend({
  _id: z.string(),
  createdAt: z.coerce.date(),
});

export type TransactionFormDataWithId = z.infer<typeof TransactionSchemaWithIdAndDate>;
export type TransactionFormData = z.infer<typeof TransactionSchema>;
