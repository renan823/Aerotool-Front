import * as Icon from "@phosphor-icons/react";
import { useState } from "react";

const ToolFilter = ({ icons }) => {
  return icons.map((icon, i) => {
    return <div className="flex bg-gray-100 p-4 rounded-lg" key={i}>{icon}</div>;
  });
};

const ToolHeader = () => {
  const iconSize = 24;
  const icons = [
    <Icon.Hash color="#9ca3af" size={iconSize} key={1}/>,
    <Icon.TextT color="#9ca3af" size={iconSize} key={2} />,
    <Icon.Wrench color="#9ca3af" size={iconSize} key={3} />,
  ];

  return (
    <nav className="flex w-full flex-col p-2 gap-y-2 py-6 items-start">
      <div className="flex w-full flex-row justify-between items-center gap-x-4">
        <div className="flex flex-row justify-center items-center p-2 px-4 bg-gray-100 rounded-lg w-full">
          <Icon.MagnifyingGlass color="#9ca3af" className="text-lg" weight="bold"/>
          <input

            type="text"
            placeholder="Nome da ferramenta"
            className="text-gray-600 outline-none border-none w-full p-2 text-md bg-gray-100 font-semibold"
          />
        </div>
      </div>
      <h1 className="p-2 text-primary font-semibold text-lg uppercase mt-4">
        Ferramentas Cadastradas
      </h1>
    </nav>
  );
};

export default ToolHeader;
