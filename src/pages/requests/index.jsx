import * as Icon from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="flex w-full p-4 flex-col">
      <nav className="flex flex-row w-full h-fit border-b-2 border-gray-200 p-4 justify-between items-center">
        <h2 className="uppercase text-xl font-semibold text-primary">
          Requisições
        </h2>
        <Link
          href="/requests/save"
          className="flex flex-row rounded-md justify-center items-center gap-x-4 bg-gradient-to-r from-accent to-primary p-4 px-6 text-white"
        >
          <span className="text-lg uppercase font-semibold">
            Nova Requisição
          </span>
          <Icon.Plus size={24} weight="bold" />
        </Link>
      </nav>
    </div>
  );
};

export default index;
