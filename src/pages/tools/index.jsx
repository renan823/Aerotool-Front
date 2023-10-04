import * as Icon from "@phosphor-icons/react";
import Link from "next/link";
import ToolList from "@/components/Tools/ToolList";
import { useState } from "react";
import ToolHeader from "@/components/Tools/ToolHeader";

const Tools = () => {
  const [tools, setTools] = useState([
    {
      id: "1",
      name: "Martelos",
      description: "Martelos de todos os tipos",
      type: "PROPERTY",
      toolItem: {
        id: "1",
        patrimony: "00000001A",
        locate: {
          id: "1",
          name: "Sala 1",
          description: "Sala 1 do Hangar",
        },
        situation: "Livre para Uso",
      }
    },
    {
      id: "2",
      name: "Chaves de fenda",
      description: "Chaves de fenda de todos os tipos",
      type: "PROPERTY",
      toolItem: {
        id: "2",
        patrimony: "00000001B",
        locate: {
          id: "1",
          name: "Sala 1",
          description: "Sala 1 do Hangar",
        },
        situation: "Livre para Uso",
      }
    },
    {
      id: "3",
      name: "Chaves de boca",
      description: "Chaves de boca de todos os tipos",
      type: "PROPERTY",
      toolItem: {
        id: "3",
        patrimony: "00000001C",
        locate: {
          id: "1",
          name: "Sala 2",
          description: "Sala 2 do Hangar",
        },
        situation: "Em uso",
      }
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
          className="sm:flex flex-row rounded-md justify-center items-center gap-x-4 bg-gradient-to-r from-accent to-primary p-4 px-6 text-white hidden"
        >
          <span className="text-lg uppercase font-semibold">
            Nova Ferramenta
          </span>
          <Icon.Plus size={24} weight="bold" />
        </Link>
      </nav>

      <div className="flex items-start justify-center flex-col">
        <ToolHeader />
        <div className="flex lg:flex-row flex-col px-4 mx-2 items-start justify-start gap-6">
          <ToolList tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
