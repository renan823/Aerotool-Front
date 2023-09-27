import NavButtons from "@/components/NavButton";
import { useState } from "react";

const Dashboard = () => {
  const [isShowView, setIsShowView] = useState(true);

  if (isShowView) {
    return (
      <div className="p-10">
        <div className="flex flex-row my-5">
          <NavButtons
            isShowView={isShowView}
            setIsShowView={setIsShowView}
            bgColor="bg-gradient-to-r from-accent to-primary rounded-md"
            buttonText={"VISÃO GERAL"}
          />
          <NavButtons
            isShowView={isShowView}
            setIsShowView={setIsShowView}
            bgColor="text-primary border-b-2 border-primary"
            buttonText={"DASHBOARD"}
          />
        </div>
        <h1>Show View</h1>
      </div>
    );
  } else {
    return (
        <div className="p-10">
        <div className="flex flex-row my-5">
          <NavButtons
            isShowView={isShowView}
            setIsShowView={setIsShowView}
            bgColor="text-primary border-b-2 border-primary"
            buttonText={"VISÃO GERAL"}
          />
          <NavButtons
            isShowView={isShowView}
            setIsShowView={setIsShowView}
            bgColor="bg-gradient-to-r from-accent to-primary rounded-md"
            buttonText={"DASHBOARD"}
          />
        </div>
        <h1>Dashboard</h1>
      </div>
    );
  }
};

export default Dashboard;
