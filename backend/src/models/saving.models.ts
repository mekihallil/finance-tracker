import { Model, model, Schema } from "mongoose";
import type { ISaving } from "../interface/saving.interface.js";

const SavingSchema: Schema<ISaving> = new Schema(
  {
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
export const Saving: Model<ISaving> = model("Saving", SavingSchema);
