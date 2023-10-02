import * as Icon from "@phosphor-icons/react";
import { useState } from "react";

const ShowViewHeader = () => {
  const iconSize = 24;

  return (
    <div className="flex flex-row justify-center items-center p-2 px-4 bg-gray-100 rounded-lg h-fit w-8/12">
      <Icon.MagnifyingGlass color="#9ca3af" className="text-lg" />
      <input
        type="text"
        placeholder="Requisição"
        className="text-gray-600 outline-none border-none w-full p-2 text-md bg-gray-100"
      />
    </div>
  );
};

export default ShowViewHeader;
