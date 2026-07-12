import { NotFoundError } from "../error/saving.error.js";
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
