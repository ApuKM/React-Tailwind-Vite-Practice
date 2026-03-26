import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { chartData } from "./chartData";

const SimpleBarChart = () => {
  return (
    <div className="w-[11/12] md:w-[80%] mx-auto mt-10 md:mt-20 flex flex-col items-center">
      <h2 className="text-5xl font-semibold text-center mb-8">
        Our Purchased Plans
      </h2>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={chartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Basic"
          fill="#8884d8"
          activeBar={{ fill: "pink", stroke: "blue" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="Standard"
          fill="#406093"
          activeBar={{ fill: "yellow", stroke: "skyblue" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="Premium"
          fill="#82ca9d"
          activeBar={{ fill: "gold", stroke: "purple" }}
          radius={[10, 10, 0, 0]}
        />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
