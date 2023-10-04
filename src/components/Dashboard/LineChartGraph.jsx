import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Requisições: 73,
  },
  {
    name: "Fev",
    Requisições: 85,
  },
  {
    name: "Mar",
    Requisições: 25,
  },
  {
    name: "Abr",
    Requisições: 33,
  },
  {
    name: "Mai",
    Requisições: 90,
  },
  {
    name: "Jun",
    Requisições: 90,
  },
  {
    name: "Jul",
    Requisições: 0,
  },
];

const LineChartGraph = () => {
  return (
    <LineChart width={500} height={300} data={data} stroke="#FFF">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Requisições" stroke="#FFF" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default LineChartGraph;
