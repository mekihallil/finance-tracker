import { NotFoundError } from "../error/error.js";
import { Saving } from "../models/saving.models.js";
import {
  savingValidateSchema,
  type ISaving,
} from "../validations/saving.validation.js";

export const createSaving = async (body: ISaving, userId: string) => {
  const saving = savingValidateSchema.parse(body);
  return await new Saving({ ...saving, userId: userId }).save();
};

export const getSavingProgress = async (userId: string) => {
  const savings = await Saving.find({ userId: userId });

  if (!savings.length) {
    return {
      goalSavings: 0,
      currentSavings: 0,
      remainingSaving: 0,
      percentageSaving: 0,
      isComplete: false,
    };
  }

  const goalSavings = savings
    .filter((s) => s.goal)
    .reduce((sum, s) => sum + (s.goal ?? 0), 0);

  const currentSavings = savings
    .filter((s) => s.amount)
    .reduce((sum, s) => sum + (s.amount ?? 0), 0);

  if (goalSavings === 0) throw new NotFoundError("No goal savings found");

  const remainingSaving = goalSavings - currentSavings;
  const percentageSaving = parseFloat(
    ((currentSavings / goalSavings) * 100).toFixed(1),
  );
  const isComplete = currentSavings >= goalSavings;

  return {
    goalSavings,
    currentSavings,
    remainingSaving,
    percentageSaving,
    isComplete,
  };
};
export const DeleteSaving = (id: string, userId: string) => {
  const deletesaving = Saving.findByIdAndDelete({ id, userId: userId });
  return deletesaving;
};

// goals
export const getGoals = async (userId: string) => {
  const goals = await Saving.find({ userId: userId });

  if (!goals.length) return [];

  return goals.map((g) => ({
    ...g.toObject(),
    percentage: parseFloat(((g.amount / g.goal) * 100).toFixed(1)),
    isComplete: g.amount >= g.goal,
    diff: new Date(g.date).getTime() - Date.now(),
  }));
};

// update
export const getAmount = async (id: string, amount: number, userId: string) => {
  const addAmonut = await Saving.findByIdAndUpdate(
    { userId: userId, id },
    { $inc: { amount } },
    { new: true, runValidators: true },
  );
  return addAmonut;
};
