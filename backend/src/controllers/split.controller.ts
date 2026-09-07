import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../error/error.js";
import { AddSplitService, getSplitBills } from "../service/split.service.js";

export const AddSplit = async (req: Request, res: Response) => {
  try {
    const newSplit = await AddSplitService(req.body);
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

export const getSplit = async (_req: Request, res: Response) => {
  try {
    const splitBills = await getSplitBills();
    res.status(StatusCodes.ACCEPTED).json(splitBills);
  } catch (error) {
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Not Found", error);
  }
};
