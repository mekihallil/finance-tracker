import { Saving } from "../models/saving.models.js";

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
