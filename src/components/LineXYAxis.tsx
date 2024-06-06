import React from "react";

interface IProps {
  xAxisLength: number;
  yAxisLength: number;
  xAxisY: number;
  XZero: number;
  YZero: number;
  yMax: number;
  yRanges: number;
}
function LineXYAxis(props: IProps) {
  const { xAxisLength, xAxisY, yAxisLength, XZero, YZero, yMax, yRanges } =
    props;

  const numYItems = 5;
  return (
    <>
      {/* X Axis */}
      <line
        x1={XZero}
        y1={xAxisY}
        x2={XZero + xAxisLength}
        y2={xAxisY}
        stroke="white"
      />
      <text x={xAxisLength / 2} y={xAxisY + 40} fill="#2980b9">
        Rating
      </text>

      {/* Y Axis */}
      <line
        x1={XZero}
        y1={YZero}
        x2={XZero}
        y2={YZero + yAxisLength}
        stroke="white"
      />
      {Array.from({ length: numYItems }).map((_, index) => {
        const y = YZero + index * (yAxisLength / numYItems);

        const yValue = Math.round(yMax - index * (yRanges / numYItems));
        return (
          <g key={index}>
            <text x={XZero - 5} y={y + 5} textAnchor="end" fill="white">
              {yValue}
            </text>
          </g>
        );
      })}
      <text
        x={XZero}
        y={YZero - 15}
        fill="#2980b9"
        transform="translate(-20,235) rotate(270)"
      >
        No. of rating
      </text>
    </>
  );
}

export default LineXYAxis;
