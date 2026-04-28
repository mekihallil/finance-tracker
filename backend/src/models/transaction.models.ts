import { Document, Model, model, Schema } from "mongoose";

export interface TInterface extends Document {
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  createAt: Date;
}

const TransactionSchema: Schema<TInterface> = new Schema(
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

export const Transaction: Model<TInterface> = model(
  "Transaction",
  TransactionSchema,
);
