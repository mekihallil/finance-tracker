import { Model, model, Schema } from "mongoose";
import type { IExpense } from "../validations/expense.validation.js";

const ExpenseSchema: Schema<IExpense> = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [200, "title cannot be more than 200 characters"],
      trim: true,
    },
    amount: { type: Number, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["income", "expense"],
      default: "expense",
    },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

export const Expense: Model<IExpense> = model("Expense", ExpenseSchema);
