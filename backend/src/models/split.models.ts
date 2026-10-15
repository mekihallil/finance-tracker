import { model, Model, Schema, Types } from "mongoose";
import type { ISplit } from "../validations/split.validation.js";
import { string } from "zod";

const categoryEnum = ["Food", "Rent", "Taxi", "Travel", "Utilities", "Other"];
export interface ISplitDoc extends ISplit {
  userId: Types.ObjectId;
}
export const SplitSchema: Schema<ISplitDoc> = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
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
    category: {
      type: String,
      required: true,
      enum: categoryEnum,
      default: "Other",
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
        paid: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true },
);

export const Split: Model<ISplitDoc> = model("split", SplitSchema);
