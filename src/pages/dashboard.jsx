import DashboardContent from "@/components/Dashboard/DashboardContent";
import ShowView from "@/components/ShowView";
import { House, SquaresFour } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useState } from "react";

const DashboardButtons = ({ button, onClick, isSelected }) => {
  const { buttonName, icon } = button;
  if (!isSelected) {
    return (
      <button className="flex flex-row items-center gap-x-2 bg-white p-4 text-primary uppercase font-semibold rounded-md shadow-md hover:shadow-xl transition-transform transform hover:scale-105" onClick={onClick}>
        {icon}
        {buttonName}
      </button>
    );
  } else {
    return (
      <button className="flex flex-row items-center gap-x-2 bg-primary p-4 text-white uppercase font-semibold rounded-md shadow-md hover:shadow-xl transition-transform transform hover:scale-105" onClick={onClick}>
        {icon}
        {buttonName}
      </button>
    );
  }
};

const DashboardHeader = ({isShowView, setIsShowView}) => {

  return (
    <div className="flex flex-row gap-x-6 p-4 w-full">
      <div>
        <DashboardButtons
          button={{
            icon: <House size={20} />,
            buttonName: "Início",
          }}
          isSelected={isShowView}
          onClick={() => setIsShowView(true)}
        />
      </div>
      <div>
        <DashboardButtons
          button={{
            icon: <SquaresFour size={20} />,
            buttonName: "Painel",
          }}
          isSelected={!isShowView}
          onClick={() => setIsShowView(false)}
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isShowView, setIsShowView] = useState(true);

  return (
    <div className="p-4 w-full">
      <DashboardHeader isShowView={isShowView} setIsShowView={setIsShowView}/>
      {isShowView ? <ShowView /> : <DashboardContent />}
    </div>
  );
};

export default Dashboard;
