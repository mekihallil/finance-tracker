import type { Request, Response } from "express";
import { Transaction, type TInterface } from "../models/transaction.models.js";

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transactions: TInterface[] = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Transaction not found", error });
  }
};
export const createTransaction = async (
  req: Request<{}, {}, TInterface>,
  res: Response,
) => {
  try {
    const { title, amount, type, category } = req.body;
    const newTransaction = await new Transaction({
      title,
      amount,
      type,
      category,
    }).save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: "Can not Create New Transction" });
  }
};
