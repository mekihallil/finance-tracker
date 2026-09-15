import { z } from "zod";

export const participants = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.email("Enter a valid email"),
});

export const categoryEnum = z.enum([
  "Food",
  "Rent",
  "Taxi",
  "Travel",
  "Utilities",
  "Other",
]);

export const splitSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title is too long"),
  amount: z
    .number("Amount must be a number")
    .positive("Amount must be greater than 0"),
  category: categoryEnum,
  participants: z
    .array(participants)
    .min(2, "At least one participant is required  ")
    .refine(
      (list) => new Set(list.map((p) => p.email.toLowerCase())).size === list.length,
      { message: "Duplicate participant emails are not allowed" },
    ),
});
export type splitFormData = z.infer<typeof splitSchema>;
export type categoryEnumFormData = z.infer<typeof categoryEnum>;