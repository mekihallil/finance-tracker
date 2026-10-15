import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  CreateTransaction,
  DeleteTransaction,
  GetTransaction,
} from "../service/transaction.service.js";
import { sendError } from "../error/error.js";
import type { AuthRequest } from "../middlewares/authMiddleware.js";
import { checkAuthentication } from "../utils/checkAuthentication.js";

// get Transactions
export const getTransaction = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const Transaction = await GetTransaction(req.userId);
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
export const createTransaction = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;
    const { title, amount, type, category } = req.body;
    const newTransaction = await CreateTransaction(
      {
        title,
        amount,
        type,
        category,
      },
      req.userId,
    );
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
export const deleteTransaction = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const { _id } = req.params;
    const deletTransaction = await DeleteTransaction(_id, req.userId);
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
