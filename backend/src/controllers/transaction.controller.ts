import type { Request, Response } from "express";
import { Transaction, type TInterface } from "../models/transaction.models.js";

// get Transactions
export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transactions: TInterface[] = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Transaction not found", error });
  }
};

// Create Transactions
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

// Update Transaction
export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const updateData = req.body;
    const updateTransaction = await Transaction.findByIdAndUpdate(
      _id,
      updateData,
      {
        new: true,
      },
    );
    res.status(200).json(updateTransaction);
  } catch (error) {
    res.status(400).json({ message: "Failed to update transaction" });
  }
};

// Delete Transaction
export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const deletTransaction = await Transaction.findByIdAndDelete(_id);
    if (!deletTransaction) {
      res.status(400).json({ message: "Transaction not found" });
    }
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete transaction" });
  }
};
