import React from "react";
const xAxisRating: number[] = [1, 2, 3, 4, 5];

interface IProps {
  ratings: number[];
  xAxisLength: number;
  yAxisLength: number;
  xAxisY: number;
  yMin: number;
  yRanges: number;
}
function BarChart(props: IProps) {
  const { ratings, xAxisLength, xAxisY, yAxisLength, yMin, yRanges } = props;

  const barWidth = xAxisLength / ratings.length;
  return (
    <>
      {ratings.map((ratingVal, index) => {
        const widthBar = 50 + index * barWidth;

        const ratingValYRatio = (ratingVal - yMin) / yRanges;

        const y = 50 + (1 - ratingValYRatio) * yAxisLength;
        const ratingYHeight = ratingValYRatio * yAxisLength;

        const sidePadding = 20;

        return (
          <g key={index}>
            <rect
              x={widthBar + sidePadding}
              y={y}
              width={barWidth - sidePadding}
              height={ratingYHeight}
              className="bar-style"
            />
            <text
              x={widthBar + barWidth / 2}
              y={xAxisY + 16}
              textAnchor="middle"
              fill="white"
            >
              {xAxisRating[index]}
            </text>
          </g>
        );
      })}
    </>
  );
}

export default BarChart;
