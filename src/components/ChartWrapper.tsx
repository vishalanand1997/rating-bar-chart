import React from "react";
import LineXYAxis from "./LineXYAxis";
import BarChart from "./BarChart";

const SVG_WIDTH = 400;
const SVG_HEIGHT = 300;

interface IProps {
  ratings: number[];
}
function ChartWrapper(props: IProps) {
  const { ratings } = props;
  const XZero = 50;
  const xAxisLength = SVG_WIDTH - XZero * 2;

  const YZero = 50;
  const yAxisLength = SVG_HEIGHT - YZero * 2;

  const xAxisY = YZero + yAxisLength;

  const yMax = 50;
  const yMin = 0;
  const yRanges = yMax - yMin;
  return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      <LineXYAxis
        XZero={XZero}
        YZero={YZero}
        xAxisLength={xAxisLength}
        yAxisLength={yAxisLength}
        xAxisY={xAxisY}
        yMax={yMax}
        yRanges={yRanges}
      />
      <BarChart
        ratings={ratings}
        xAxisLength={xAxisLength}
        yAxisLength={yAxisLength}
        xAxisY={xAxisY}
        yMin={yMin}
        yRanges={yRanges}
      />
    </svg>
  );
}

export default ChartWrapper;
