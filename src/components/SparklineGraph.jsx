import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparklineGraph = ({
  id,
  height,
  width,
  color,
  type,
  data,
  currentColor,
}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      dataSource={data}
      type={type}
      xName="money"
      yName="time"
      border={{ color: currentColor, width: 1 }}
      tooltipSettings={{
        visible: true,
        format: "${money}: ${time}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparklineGraph;
