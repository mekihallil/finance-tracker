import type { Request, Response } from "express";
import type { ISaving } from "../interface/saving.interface.js";
import { Saving } from "../models/saving.models.js";

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

    if (
      (typeof goal !== "number" || goal <= 0) &&
      (typeof amount !== "number" || amount < 0)
    ) {
      res
        .status(400)
        .json({ message: "Amount and Goal must be a positive number" });
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
