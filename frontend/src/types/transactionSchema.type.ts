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
  "Other",
]);
export const TransactionSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  amount: z
    .number({ error: "Please enter a valid number" })
    .positive("Amount must be a positive number"),
  type: z.enum(["income", "expense"]),
  category: categoryEnum,
});

export const TransactionSchemaWithIdAndDate = TransactionSchema.extend({
  _id: z.string(),
  createdAt: z.coerce.date(),
});

export type TransactionFormDataWithId = z.infer<
  typeof TransactionSchemaWithIdAndDate
>;
export type TransactionFormData = z.infer<typeof TransactionSchema>;
