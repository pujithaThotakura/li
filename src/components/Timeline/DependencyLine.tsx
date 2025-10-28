import React from "react";

interface DependencyLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const DependencyLine: React.FC<DependencyLineProps> = ({
  x1,
  y1,
  x2,
  y2,
}) => {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
        </marker>
      </defs>

      <path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke="#94a3b8"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default DependencyLine;
