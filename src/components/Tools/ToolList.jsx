import * as Icon from "@phosphor-icons/react";
import { useState } from "react";

const ToolListItemDetails = ({ tool }) => {
  const toolItem = tool.toolItem;
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h2 className="text-xl uppercase font-semibold p-2">Ferramenta</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center p-2 gap-x-2">
          <h2 className="text-md font-semibold opacity-80">
            {toolItem.patrimony}
          </h2>
        </div>
        <div className="flex flex-col p-2 items-center justify-center">
          <p className="text-md uppercase font-semibold">
            {toolItem.locate.name}
          </p>
          <p className="text-md font-semibold opacity-50">
            {toolItem.locate.description}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold uppercase p-2">
            {toolItem.situation}
          </p>
        </div>
      </div>
    </div>
  );
};

const ToolListItem = ({ tool }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col bg-gradient-to-br from-accent to-primary w-fit p-4 text-white rounded-lg mx-4 items-center h-fit">
      <div className="flex flex-col p-2 justify-center items-center">
        <div className="flex flex-row justify-center items-center p-2 gap-x-2">
          <Icon.Wrench color="#FFF" size={24} weight="bold" />
          <h1 className="text-xl font-semibold uppercase">{tool.name}</h1>
        </div>
        <h2 className="text-md font-semibold opacity-70">{tool.description}</h2>
      </div>
      {showDetails ? (
        <div>
          <div className="flex justify-center flex-col items-center mt-4">
            <h2 className="text-md font-semibold uppercase opacity-80">
              Mostrar Menos
            </h2>
            <Icon.CaretUp
              color="#FFF"
              size={24}
              weight="bold"
              onClick={() => setShowDetails(!showDetails)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <ToolListItemDetails tool={tool} />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center flex-col items-center mt-4">
            <h2 className="text-md font-semibold uppercase opacity-80">
              Mais Detalhes
            </h2>
            <Icon.CaretDown
              color="#FFF"
              size={24}
              weight="bold"
              onClick={() => setShowDetails(!showDetails)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ToolList = ({ tools }) => {
  return tools.map((tool, i) => {
    return <ToolListItem tool={tool} key={i} />;
  });
};

export default ToolList;
