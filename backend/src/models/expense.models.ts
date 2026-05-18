import { Model, model, Schema } from "mongoose";
import type { EInterface } from "../interface/expense.interface.js";

const ExpenseSchema: Schema<EInterface> = new Schema(
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
    createAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

export const Expense: Model<EInterface> = model(
  "Expense",
  ExpenseSchema,
);
