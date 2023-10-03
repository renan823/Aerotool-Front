import * as Icon from "@phosphor-icons/react";



const ShowViewHeader = () => {
  const iconSize = 24;

  return (
    <nav className="flex w-full flex-col p-2 gap-y-2 py-6">
      <div className="flex w-full flex-row justify-between items-center gap-x-4">
        <div className="flex flex-row justify-center items-center p-2 px-4 bg-gray-100 rounded-lg w-full">
          <Icon.MagnifyingGlass color="#9ca3af" className="text-lg" weight="bold"/>
          <input
            type="text"
            placeholder="Nome da Requisição"
            className="text-gray-600 outline-none border-none w-full p-2 text-md bg-gray-100 font-semibold"
          />
        </div>
      </div>
      <h1 className="p-2 text-primary font-semibold text-lg uppercase mt-4">
        Requisições
      </h1>
    </nav>
  );
};

export default ShowViewHeader;
