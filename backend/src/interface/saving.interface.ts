import type { ObjectId } from "mongoose";
import type { ISaving } from "../validations/saving.validation.js";

interface ISavingDocument extends ISaving, Document {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
