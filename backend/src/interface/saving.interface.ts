export interface ISaving {
  id?: string;
  name: string;
  category: string;
  amount: number;
  goal: number;
  date: Date;
  createdAt?: string;
}
