import { Split } from "../models/split.models.js";
import {
  splitValidatorSchema,
  type ISplit,
} from "../validations/split.validation.js";

export const AddSplitService = async (body: ISplit) => {
  const parsed = splitValidatorSchema.parse(body);
  const newSplit = await new Split(parsed).save();
  return newSplit;
};
export const getSplitBills = async () => {
  const splitBills = await Split.find();

  const individualExpense = splitBills
    .map((split) => split.amount / split.participants.length)
    .reduce((sum, split) => sum + split, 0);

  return { splitBills, individualExpense };
};
export const DeleteSplitBill = async (id: any) => {
  const deleteSplit = await Split.findByIdAndDelete(id);
  return deleteSplit;
};
