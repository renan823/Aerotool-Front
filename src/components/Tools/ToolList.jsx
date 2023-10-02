import * as Icon from "@phosphor-icons/react"

const ToolListItem = ({ tool }) => {
  return (
    <div className="bg-gradient-to-br from-accent to-primary w-fit p-4 text-white rounded-lg mx-4">
      <div className="flex flex-row p-2 justify-center items-center gap-x-4">
        <Icon.Wrench color="#FFF" size={24} weight="bold"/> 
        <h1 className="text-xl font-semibold uppercase">{tool.name}</h1>
      </div>
    </div>
  );
};

const ToolList = ({ tools }) => {
  return tools.map((tool) => {
    return <ToolListItem tool={tool} />;
  });
};

export default ToolList;
