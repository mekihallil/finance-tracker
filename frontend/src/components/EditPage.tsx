import { useParams } from "react-router";
import { UpdateTransaction } from "../components/UpdateTransaction";
import { useTransaction } from "../hook/userTransaction.hook";

export const EditPage = () => {
  const { id } = useParams(); // IDውን ከ URL ይወስዳል
  const { getTransactionsQuery } = useTransaction();

  // ካሉት ትራንዛክሽኖች ውስጥ የዚህን ID ዳታ ፈልግ
  const transactionToEdit = getTransactionsQuery.data?.find(
    (t) => t._id === id,
  );

  if (!transactionToEdit) return <div>ዳታው አልተገኘም...</div>;

  return (
    <div className="p-10">
      <UpdateTransaction id={id!} data={transactionToEdit} />
    </div>
  );
};
