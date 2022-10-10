import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  return <Doughnut data={props.charData} options={{ cutout: "180" }} />;
};

export default BarChart;
