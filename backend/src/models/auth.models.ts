import { model, Schema } from "mongoose";
import type { ILogin, IRegister } from "../validations/auth.validation.js";

export interface IUser extends IRegister {
  userId: Schema.Types.ObjectId;
}

export const userAuthSchema = new Schema<IUser>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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

export const User = model<IUser>("UserAuth", userAuthSchema);
