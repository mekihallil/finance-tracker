import { email } from "zod";
import { User, userAuthSchema } from "../models/auth.models.js";
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
  const user = await User.find({ _id: userId });
  const yourEmail = user.map((use) => use.email)[0] as string;
  const yourName =
    user
      .map((use) => use.name)[0]
      ?.trim()
      .split(/\s+/)[0] ?? "";

  const splitBillsc = await Split.find();

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

  const YouOwe = splitBillsc
    .filter((split) =>
      split.participants.some(
        (participant) =>
          participant.email.toLowerCase() === yourEmail.toLowerCase() &&
          participant.paid === false,
      ),
    )
    .map((split) => split.amount / split.participants.length)
    .reduce((total, split) => total + split, 0);
  const NetBalance = OwedToYou - YouOwe;
  return {
    YouOwe,
    OwedToYou,
    NetBalance,
    yourEmail,
    yourName,
    splitBills,
    individualExpense,
  };
};
export const DeleteSplitBill = async (id: any, userId: string) => {
  const deleteSplit = await Split.findByIdAndDelete({ _id: id, userId });
  return deleteSplit;
};
