export interface TInterface {
  id?: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  createAt?: Date;
}

export interface IdparticalTInterface extends TInterface {
  _id: string;
}
