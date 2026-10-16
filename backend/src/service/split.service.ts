import { Split } from "../models/split.models.js";
import {
  splitValidatorSchema,
  type ISplit,
} from "../validations/split.validation.js";

export const AddSplitService = async (body: ISplit, userId: string) => {
  const parsed = splitValidatorSchema.parse(body);
  const newSplit = await new Split({ ...parsed, userId }).save();
  return newSplit;
};
export const getSplitBills = async (userId: string) => {
  const splitBills = await Split.find({ userId });

  const individualExpense = splitBills
    .map((split) => split.amount / split.participants.length)
    .reduce((sum, split) => sum + split, 0);

  const OwedToYou = splitBills
    .map((split) => {
      const individualvalue = split.amount / split.participants.length;
      const unPaidParticipantsLength = split.participants.filter(
        (par) => par.paid === false,
      ).length;
      return unPaidParticipantsLength * individualvalue;
    })
    .reduce((sum, split) => sum + split, 0);

  return { splitBills, individualExpense, OwedToYou };
};
export const DeleteSplitBill = async (id: any, userId: string) => {
  const deleteSplit = await Split.findByIdAndDelete({ _id: id, userId });
  return deleteSplit;
};
