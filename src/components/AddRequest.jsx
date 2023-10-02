import { Plus } from "@phosphor-icons/react";
import Link from "next/link";

const AddRequest = () => {
  return (
    <Link href="/dashboard" className="p-2 items-center gap-x-2 flex flex-row bg-gradient-to-r from-accent to-primary rounded-md text-white  text-lg font-semibold cursor-pointer">
      <Plus size={24} />
      <span onClick={() => {}}>REQUISIÇÃO</span>
    </Link>
  );
};

export default AddRequest;
