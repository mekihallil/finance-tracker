import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  CreateTransaction,
  DeleteTransaction,
  GetTransaction,
} from "../service/transaction.service.js";
import type { TransactionInput } from "../validations/transaction.validation.js";
import { sendError } from "../error/error.js";

// get Transactions
export const getTransaction = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const Transaction = await GetTransaction();
    res.status(StatusCodes.OK).json(Transaction);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Transaction  not found",
      error,
    );
  }
};

// Create Transactions
export const createTransaction = async (
  req: Request<Record<string, never>, unknown, TransactionInput>,
  res: Response,
) => {
  try {
    const { title, amount, type, category } = req.body;
    const newTransaction = await CreateTransaction({
      title,
      amount,
      type,
      category,
    });
    res.status(StatusCodes.CREATED).json(newTransaction);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Can not add new Transaction",
      error,
    );
  }
};

// Delete Transaction
export const deleteTransaction = async (
  req: Request<{ _id: string }>,
  res: Response,
) => {
  try {
    const { _id } = req.params;
    const deletTransaction = await DeleteTransaction(_id);
    if (!deletTransaction) {
      sendError(res, StatusCodes.BAD_REQUEST, "Transaction not found");
      return;
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Transaction deleted successfully" });
  } catch (error) {
    sendError(
      res,
      StatusCodes.BAD_REQUEST,
      "Failed to delete Transaction",
      error,
    );
  }
};
