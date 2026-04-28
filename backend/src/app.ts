import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/transaction.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/transaction", router);

export default app;
