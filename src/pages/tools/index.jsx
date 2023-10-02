import * as Icon from "@phosphor-icons/react";
import Link from "next/link";
import ToolList from "@/components/Tools/ToolList";
import { useState } from "react";
import ToolHeader from "@/components/Tools/ToolHeader";

const Tools = () => {
  const [tools, setTools] = useState([
    {
      name: "Lista de quem perguntou",
    },
    {
      name: "Chave de quem te perguntou",
    },
    {
      name: "DJIWAHIWAH, O que? Som de peido*",
    },
  ]);

  return (
    <div className="flex w-full p-4 flex-col">
      <nav className="flex flex-row w-full h-fit border-b-2 border-gray-200 p-4 justify-between items-center">
        <h2 className="uppercase text-xl font-semibold text-primary">
          Ferramentas
        </h2>
        <Link
          href="/tools/save"
          className="flex flex-row rounded-md justify-center items-center gap-x-4 bg-gradient-to-r from-accent to-primary p-4 px-6 text-white"
        >
          <span className="text-lg uppercase font-semibold">
            Nova Ferramenta
          </span>
          <Icon.Plus size={24} weight="bold" />
        </Link>
      </nav>

      <div>
        <ToolHeader />
        <div className="flex px-4 mx-2">
          <ToolList tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
