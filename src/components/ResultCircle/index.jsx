import { motion } from "framer-motion";
const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct, animate }) => {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  const draw = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (i) => {
      // const delay = 1 + i * 0.5;
      return {
        opacity: 1,
        pathLength: pct / 100 || 0,
        transition: {
          pathLength: { type: "spring", duration: 2.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.circle
      r={r}
      cx={80}
      cy={80}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} //handle 0%
      strokeWidth={".8rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
      variants={animate ? draw : ""}
      key={pct}
    ></motion.circle>
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
    <motion.svg width={160} height={160} initial="hidden" animate="visible">
      {/* g tag used to group other svg elements */}
      <g transform={`rotate(-90 ${"80 80"})`}>
        <Circle color={colorSecondary} />
        <Circle color={colorPrimary} pct={pct} animate={true} />
      </g>
      <text
        x="50%"
        y="50%"
        fill={textColor}
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.8em"}
      >
        {pct.toFixed(0)}%
      </text>
    </motion.svg>
  );
};

export default ResultCircle;
