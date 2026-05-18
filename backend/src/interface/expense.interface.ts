export interface EInterface {
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  createAt: Date;
}