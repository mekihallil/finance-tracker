import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  amount: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  type: z.enum(["income", "expense"]),
  category: z
    .string({ error: "Please select a category" })
    .min(1, "Please select a category"),
});

export const expenseSchemaWithIdAndDate = expenseSchema.extend({
  _id: z.string(),
  createAt: z.coerce.date(),
});

export type ExpenseFormDataWithId = z.infer<typeof expenseSchemaWithIdAndDate>;
export type ExpenseFormData = z.infer<typeof expenseSchema>;
