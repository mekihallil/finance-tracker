import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../error/error.js";
import {
  AddSplitService,
  DeleteSplitBill,
  getSplitBills,
} from "../service/split.service.js";
import type { AuthRequest } from "../middlewares/authMiddleware.js";
import { checkAuthentication } from "../utils/checkAuthentication.js";

export const AddSplit = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;
    const newSplit = await AddSplitService(req.body, req.userId);
    res.status(StatusCodes.CREATED).json(newSplit);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Can not add new Split",
      error,
    );
  }
};

export const getSplit = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const splitBills = await getSplitBills(req.userId);
    res.status(StatusCodes.ACCEPTED).json(splitBills);
  } catch (error) {
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Not Found", error);
  }
};

export const deleteSplitBill = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const { id } = req.params;
    const splitDelete = await DeleteSplitBill(id, req.userId);
    if (!splitDelete) {
      sendError(res, StatusCodes.BAD_REQUEST, "SplitBill not found");
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Split Bill deleted successfully" });
  } catch (error) {
    sendError(
      res,
      StatusCodes.BAD_REQUEST,
      "Failed to delete Split bill",
      error,
    );
  }
};
