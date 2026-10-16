import { model, Schema } from "mongoose";
import type { IRegister } from "../validations/auth.validation.js";

export const userAuthSchema = new Schema<IRegister>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
  },
  { timestamps: true },
);

export const User = model<IRegister>("UserAuth", userAuthSchema);
