import React from "react";
import ChartPie from "./ChartPie";
import ChartLine from "./ChartLine";

const ChartAdmin = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2">
      <ChartPie />
      <ChartLine />
    </div>
  );
};

export default ChartAdmin;
