import { z } from "zod";

export const expenseValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  amount: z.number().positive("Amount must be positive number"),
  type: z.enum(["income", "expense"]),
  category: z.string().min(1, "Category is required"),
});
