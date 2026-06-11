import type { ObjectId } from "mongoose";
import z from "zod";

export const savingValidateSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    category: z.string().min(1, "Category is required"),
    amount: z.number().min(0, "Amount cannot be negative"),
    goal: z.number().positive("Goal must be positive"),
    date: z.coerce.date(),
  })
  .refine((data) => data.goal >= data.amount, {
    message: "Goal must be greater than or equal to current amount",
    path: ["goal"],
  });

export type ISaving = z.infer<typeof savingValidateSchema>;

