export interface IExpense {
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  createAt: Date;
}
