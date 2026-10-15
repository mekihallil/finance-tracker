import { Model, model, Schema, Types } from "mongoose";
import type { ISaving } from "../validations/saving.validation.js";

interface Isaving extends ISaving {
  userId: Types.ObjectId;
}
const SavingSchema: Schema<Isaving> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: [50, "name cannot be more than 50 characters "],
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: { type: Number, required: true, trim: true },
    goal: { type: Number, required: true, trim: true },
    date: { type: Date, required: true },
  },
  { timestamps: true },
);
export const Saving: Model<Isaving> = model("Saving", SavingSchema);
