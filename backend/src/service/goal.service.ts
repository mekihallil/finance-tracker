import { NotFoundError } from "../error/saving.error.js";
import { Saving } from "../models/saving.models.js";

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
  return addAmonut;
};
