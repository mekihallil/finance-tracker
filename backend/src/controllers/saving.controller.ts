import type { Request, Response } from "express";
import type { ISaving } from "../interface/saving.interface.js";
import { Saving } from "../models/saving.models.js";

// Add savings
export const addSaving = async (
  req: Request<{}, {}, ISaving>,
  res: Response,
) => {
  try {
    const { name, category, amount, goal, date } = req.body;

    // Input validation
    if (!name || !category || goal == null || !date) {
      res.status(400).json({
        message: "All fields are required: name, category, amount, goal, date",
      });
      return;
    }

    if (typeof goal !== "number" || goal <= 0) {
      res.status(400).json({ message: "Goal must be a positive number" });
      return;
    }

    if (typeof amount !== "number" || amount < 0) {
      res.status(400).json({ message: "Amount must be a non-negative number" });
      return;
    }

    const newSaving = await new Saving({
      name,
      category,
      amount,
      goal,
      date,
    }).save();

    res.status(201).json(newSaving);
  } catch (error) {
    console.error("[addSaving] Error:", error);
    res
      .status(500)
      .json({ message: "Failed to create saving. Please try again." });
  }
};

// Get Goal Savings
export const getGoalSaving = async (req: Request, res: Response) => {
  try {
    const savings: ISaving[] = await Saving.find();

    if (!savings.length) {
      res.status(404).json({ message: "No Savings found" });
      return;
    }

    const goalSavings = savings
      .filter((s) => s.goal)
      .reduce((sum, s) => sum + s.goal, 0);

    const currentSavings = savings
      .filter((s) => s.amount)
      .reduce((sum, s) => sum + s.amount, 0);

    if (goalSavings === 0) {
      res.status(400).json({ message: "No goal savings found" });
      return;
    }
    const remainingSaving = goalSavings - currentSavings;
    const percentageSaving = parseFloat(
      ((currentSavings / goalSavings) * 100).toFixed(1),
    );
    const isComplete = currentSavings >= goalSavings;
    res.status(200).json({
      goalSavings,
      currentSavings,
      remainingSaving,
      percentageSaving,
      isComplete,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
