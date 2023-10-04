import React from "react";
import PieChartGraph from "./PieChartGraph";
import LineChartGraph from "./LineChartGraph";

const Charts = () => {
  return (
    <div className="bg-gradient-to-r from-accent to-primary rounded-md p-4 w-fit justify-around items-center flex flex-row w-full">
      <LineChartGraph />
      <PieChartGraph />
    </div>
  );
};

export default Charts;
