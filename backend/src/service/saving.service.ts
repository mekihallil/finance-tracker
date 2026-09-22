import { NotFoundError } from "../error/error.js";
import { Expense } from "../models/expense.models.js";
import { Saving } from "../models/saving.models.js";
import { savingValidateSchema } from "../validations/saving.validation.js";

export const createSaving = async (body: unknown) => {
  const saving = savingValidateSchema.parse(body);
  return await new Saving(saving).save();
};

export const getSavingProgress = async () => {
  const savings = await Saving.find();

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
export const DeleteSaving = (id: string) => {
  const deletesaving = Saving.findByIdAndDelete(id);
  return deletesaving;
};

// goals
export const getGoals = async () => {
  const goals = await Saving.find();

  if (!goals.length) return [];

  return goals.map((g) => ({
    ...g.toObject(),
    percentage: parseFloat(((g.amount / g.goal) * 100).toFixed(1)),
    isComplete: g.amount >= g.goal,
    diff: new Date(g.date).getTime() - Date.now(),
  }));
};

// update
export const getAmount = async (id: string, amount: number) => {
  const addAmonut = await Saving.findByIdAndUpdate(
    id,
    { $inc: { amount } },
    { new: true, runValidators: true },
  );
  return addAmonut;
};
