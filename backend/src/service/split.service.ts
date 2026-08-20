import { Split } from "../models/split.models.js";
import {
  splitValidatorSchema,
  type ISplit,
} from "../validations/split.validation.js";

export const createSplitService = async (body: unknown) => {
  const parsed = splitValidatorSchema.parse(body);
  const newSplit = await new Split(parsed).save();
  return newSplit;
};
