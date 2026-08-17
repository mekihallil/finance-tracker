import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expenseRouter from "./routes/expense.route.js";
import savingRouter from "./routes/saving.route.js";
import goalRouter from "./routes/goal.route.js";
import splitRouter from "./routes/split.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/expense", expenseRouter);
app.use("/api/saving", savingRouter);
app.use("/api/goal", goalRouter);
app.use("/api/split", splitRouter);

export default app;
