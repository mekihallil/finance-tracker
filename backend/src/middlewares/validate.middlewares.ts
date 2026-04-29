import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation Error",
          errors: error.issues.map((issue) => ({
            field: issue.path.join("-"),
            message: issue.message,
          })),
        });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
