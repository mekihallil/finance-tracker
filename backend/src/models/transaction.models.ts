import { Model, model, Schema } from "mongoose";
import type { ITransaction } from "../validations/transaction.validation.js";

const TransactionSchema: Schema<ITransaction> = new Schema(
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

export const Transaction: Model<ITransaction> = model("Expense", TransactionSchema);
