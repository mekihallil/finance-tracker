import z from "zod";

export const savingValidateSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    category: z.string().min(1, "Category is required"),
    amount: z.number().positive("Amount must be positive"),
    goal: z.number().positive("Amount must be positive"),
    date: z.string(),
  })
  .refine((data) => data.goal >= data.amount, {
    message: "Amonut cannot greater than gaol amount",
    path: ["goal"],
  });
