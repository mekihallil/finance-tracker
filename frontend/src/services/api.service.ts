import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTransactions = () => api.get("/transaction");
export const getSummary = () => api.get("/transaction/summary");
export const createTransaction = (data: unknown) =>
  api.post("/transaction/create", data);
export const updateTransaction = (data: unknown) =>
  api.patch("/transaction/update", data);
export const deleteTransaction = (id: string) =>
  api.delete(`/transaction/delete/${id}`);
