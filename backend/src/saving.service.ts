import { NotFoundError } from "./error/saving.error.js";
import { Saving } from "./models/saving.models.js";
import { savingValidateSchema } from "./validations/saving.validation.js";

export const createSaving = async (body: unknown) => {
  const saving = savingValidateSchema.parse(body);
  return await new Saving(saving).save();
};

export const getSavingProgress = async () => {
  const savings = await Saving.find();

  if (!savings.length) throw new NotFoundError("No Savings found");

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

// goals
export const getGoals = async () => {
  const goals = await Saving.find();
  if (!goals.length) throw new NotFoundError("No goals found");

  return goals.map((g) => ({
    ...g.toObject(),
    percentage: parseFloat(((g.amount / g.goal) * 100).toFixed(1)),
    isComplete: g.amount >= g.goal,
  }));
};

// update
export const getAmount = async (id: string, amount: number) => {
  const addAmonut = await Saving.findByIdAndUpdate(
    id,
    { $inc: { amount } },
    { new: true, runValidators: true },
  );
  return addAmonut; // null if not found, or the updated doc
};
