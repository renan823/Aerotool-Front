import NavButtons from "@/components/NavButton";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import AddRequest from "@/components/Requests/Register/AddRequest";
import ShowView from "@/components/ShowView";
import DashboardContent from "@/components/Dashboard/DashboardContent";

const Dashboard = () => {
  const [isShowView, setIsShowView] = useState(true);

  if (isShowView) {
    return (
      <div className="p-4 w-full">
        <div className="flex flex-row my-5 justify-between border-b-2 border-gray-200 p-4">
          <div className="flex flex-row gap-3 p-2">
            <NavButtons
              isShowView={isShowView}
              setIsShowView={setIsShowView}
              bgColor="bg-gradient-to-r from-accent to-primary rounded-md"
              buttonText={"VISÃO GERAL"}
              isSelected={true}
            />
            <NavButtons
              isShowView={isShowView}
              setIsShowView={setIsShowView}
              bgColor="text-primary border-b-2 border-primary"
              buttonText={"DASHBOARD"}
              isSelected={false}
            />
          </div>
          <AddRequest />
        </div>
        <ShowView />
      </div>
    );
  } else {
    return (
      <div className="p-4 w-full">
        <div className="flex flex-row my-5 justify-between border-b-2 border-gray-200 p-4">
          <div className="flex flex-row gap-3 p-2">
            <NavButtons
              isShowView={isShowView}
              setIsShowView={setIsShowView}
              bgColor="text-primary border-b-2 border-primary"
              buttonText={"VISÃO GERAL"}
              isSelected={false}
            />
            <NavButtons
              isShowView={isShowView}
              setIsShowView={setIsShowView}
              bgColor="bg-gradient-to-r from-accent to-primary rounded-md"
              buttonText={"DASHBOARD"}
              isSelected={true}
            />
          </div>
        </div>
        <DashboardContent />
      </div>
    );
  }
};

export default Dashboard;
