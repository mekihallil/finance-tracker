import { model, Model, Schema } from "mongoose";
import type { ISplit } from "../validations/split.validation.js";

export const SplitSchema: Schema<ISplit> = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [50, "title cannot be more than 50 characters"],
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    participants: [
      {
        name: {
          type: String,
          required: true,
          maxLength: [50, "name cannot be more than 50 characters"],
          trim: true,
        },
        email: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true },
);

export const Split: Model<ISplit> = model("split", SplitSchema);
