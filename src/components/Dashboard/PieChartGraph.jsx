import React from "react";
import { PieChart, Pie, Cell } from "recharts";
const data = [
  { name: "Retornados", value: 400 },
  { name: "Em aberto", value: 300 },
  { name: "Atrasados", value: 100 },
];
const COLORS = ["#6DDC52", "#DCC652", "#FF7575"];

const PieChartGraph = () => {
  return (
    <div className="w-fit h-fit justify-center items-center text-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={7}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <span className=" text-xl font-semibold text-white">73% de Retorno</span>
    </div>
  );
};

export default PieChartGraph;
