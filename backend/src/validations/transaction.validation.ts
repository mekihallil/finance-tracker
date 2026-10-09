import { z } from "zod";
const categoryEnum = z.enum([
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Rental Income",
  "Bonus",
  "Refund",
  "Other",
  "Food",
  "Transport",
  "Coffee",
  "Shopping",
  "Rent",
  "Education",
  "Entertainment",
  "Health",
]);
// What the client sends when creating a new record
export const TransactionValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  amount: z.number().positive("Amount must be positive number"),
  type: z.enum(["income", "expense"]),
  category: categoryEnum,
});

export type TransactionInput = z.infer<typeof TransactionValidationSchema>;

export const TransactionDocumentSchema = TransactionValidationSchema.extend({
  _id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ITransaction = z.infer<typeof TransactionDocumentSchema>;
