import { model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export const userAuthSchema = new Schema<IUser>(
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

export const User = model<IUser>("UserAuth", userAuthSchema);
