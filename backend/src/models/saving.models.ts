import { Model, model, Schema } from "mongoose";
import type { SInterface } from "../interface/saving.interface.js";

const SavingSchema: Schema<SInterface> = new Schema(
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
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);
export const Saving: Model<SInterface> = model("Saving", SavingSchema);
