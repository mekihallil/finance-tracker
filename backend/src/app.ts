import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import transactionRouter from "./routes/transaction.route.js";
import savingRouter from "./routes/saving.route.js";
import splitRouter from "./routes/split.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/saving", savingRouter);
app.use("/api/split", splitRouter);

export default app;
