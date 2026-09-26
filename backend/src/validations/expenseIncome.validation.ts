import { z } from "zod";

// What the client sends when creating a new record
export const expenseIncomeValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  amount: z.number().positive("Amount must be positive number"),
  type: z.enum(["income", "expense"]),
  category: z.string().min(1, "Category is required"),
});

export type ExpenseIncomeInput = z.infer<typeof expenseIncomeValidationSchema>;


export const expenseIncomeDocumentSchema = expenseIncomeValidationSchema.extend({
  _id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IExpenseIncome = z.infer<typeof expenseIncomeDocumentSchema>;
