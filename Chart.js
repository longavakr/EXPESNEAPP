import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMAX = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMAX}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
