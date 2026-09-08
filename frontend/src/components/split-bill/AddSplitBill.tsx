import { Plus } from "lucide-react";
import { useState, type FC, type ReactElement } from "react";

interface participantsProps {
  id: string;
  name: string;
  email: string;
}

interface addSplitBillProps {
  isOpen: boolean;
  onClose: () => void;
}

type Category = {
  id: number;
  category: string;
};

const CategoryData: Category[] = [
  {
    id: 1,
    category: "Food",
  },
  {
    id: 2,
    category: "Rent",
  },
  {
    id: 3,
    category: "Taxi",
  },
  {
    id: 4,
    category: "Travel",
  },
  {
    id: 5,
    category: "Utilities",
  },
  {
    id: 6,
    category: "Other",
  },
];

export const AddSplitBill: FC<addSplitBillProps> = ({
  isOpen,
  onClose,
}): ReactElement => {
  const [participants, setParticipants] = useState<participantsProps[]>([
    {
      id: crypto.randomUUID(),
      name: "You",
      email: "you@gmail.com",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addParticipant = () => {
    if (!name.trim() || !email.trim()) return;

    const newParticipant: participantsProps = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
    };
    setParticipants((prev) => [...prev, newParticipant]);

    // clear inputs after adding
    setName("");
    setEmail("");
  };

  if (!isOpen) return <></>;
  return (
    <article className="border border-black dark:bg-[#2C3546] rounded-3xl p-7 mt-8">
      <h1 className="mb-8">Create New Split</h1>
      <div className="grid gap-6.5">
        <div className="grid">
          <div className="grid grid-cols-3 gap-3">
            <div className="grid ">
              <label htmlFor="" className="p-1">
                What's this for?
              </label>
              <input
                className="dark:bg-[#283243] p-2 rounded-2xl bg-gray-200 dark:border border-[#202B3D]"
                type="text"
                placeholder="e.g., Dinner at Pizza Place"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="p-1">
                Amount
              </label>
              <input
                className="dark:bg-[#283243] p-2 rounded-2xl bg-gray-200 dark:border border-[#202B3D]"
                type="number"
                placeholder="0.00"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="p-1">
                Category
              </label>
              <select
                name="category"
                className="rounded-2xl bg-gray-200 dark:bg-[#283243] dark:border border-[#202B3D] p-2"
              >
                {CategoryData.map(({ id, category }) => {
                  return (
                    <option
                      value={category}
                      key={id}
                      className="dark:bg-[#283243] p-2"
                    >
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">Participants</label>
          <div>
            {participants.map(({ id, name, email }) => {
              return (
                <section className="border rounded-2xl mb-3 mt-1">
                  <div id={id} className="flex gap-3 p-2.5">
                    <h1 className="border rounded-full px-3 py-1 my-auto capitalizex">
                      {name.slice(0, 1)}
                    </h1>
                    <div>
                      <h1>{name}</h1>
                      <h1>{email}</h1>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <div className=" grid grid-cols-12 gap-4">
            <input
              className="col-start-1 col-end-7 dark:bg-[#283243] p-2 rounded-2xl bg-gray-200 dark:border border-[#202B3D]"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="col-start-7 col-end-12 dark:bg-[#283243] p-2 rounded-2xl bg-gray-200 dark:border border-[#202B3D]"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={addParticipant}
              className="grid place-content-center dark:border rounded-xl bg-gray-300 dark:bg-[#283243] mx-2"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 ml-5 mt-5">
        <button>Create Split</button>
        <button className="border py-1 px-4 rounded-xl" onClick={onClose}>
          Cancel
        </button>
      </div>
    </article>
  );
};
