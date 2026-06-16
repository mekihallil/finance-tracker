export interface EInterface {
  id?: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  createAt?: Date;
}

export interface IdparticalEInterface extends EInterface {
  _id: string;
  goal: number;
}
