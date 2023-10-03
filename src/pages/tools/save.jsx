import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react"
import ToolForm from "@/components/Tools/Register/ToolForm";
import ToolItemForm from "@/components/Tools/Register/ToolItemForm";

const CreateTool = () => {
  return (
    <div className="flex w-full p-4 flex-col">
      <nav className="flex flex-row w-full h-fit border-b-2 border-gray-200 p-4 justify-between items-center">
        <h2 className="uppercase text-xl font-semibold text-primary">
          Nova Ferramenta
        </h2>
        <Link
          href="/tools"
          className="flex flex-row rounded-md justify-center items-center gap-x-4 p-4 px-6 text-primary"
        >
          <Icon.ArrowLeft size={24} weight="bold" />
        </Link>
      </nav>

      <div>
        <ToolForm />
        <ToolItemForm />
      </div>
    </div>
  );
};

export default CreateTool;
