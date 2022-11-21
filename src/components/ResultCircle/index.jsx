const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct }) => {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={80}
      cy={80}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} //handle 0%
      strokeWidth={".8rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const ResultCircle = ({
  percentage,
  colorPrimary,
  colorSecondary,
  textColor,
}) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={160} height={160}>
      {/* g tag used to group other svg elements */}
      <g transform={`rotate(-90 ${"80 80"})`}>
        <Circle color={colorSecondary} />
        <Circle color={colorPrimary} pct={pct} />
      </g>
      <text
        x="50%"
        y="50%"
        fill={textColor}
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.6em"}
      >
        {pct.toFixed(0)}%
      </text>
    </svg>
  );
};

export default ResultCircle;
