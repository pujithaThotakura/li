import React, { useMemo } from "react";
import { generateTimeScale } from "@/utils/position.utils";

interface TimelineGridProps {
  startDate: Date;
  endDate: Date;
  viewMode: "day" | "week" | "month";
  pixelsPerDay: number;
}

const TimelineGrid: React.FC<TimelineGridProps> = ({
  startDate,
  endDate,
  viewMode,
  pixelsPerDay,
}) => {
  const timeScale = useMemo(
    () => generateTimeScale(startDate, endDate, viewMode),
    [startDate, endDate, viewMode]
  );

  const columnWidth =
    viewMode === "day" ? 40 : viewMode === "week" ? 80 : 120;

  return (
    <div className="relative border-b border-neutral-200 bg-white text-neutral-600 select-none">
      <div className="flex">
        {timeScale.map((unit, i) => (
          <div
            key={i}
            className="text-center border-r border-neutral-200 py-2 text-xs"
            style={{ width: `${columnWidth}px` }}
          >
            {unit.label}
          </div>
        ))}
      </div>

      {/* vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {timeScale.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-r border-neutral-200"
            style={{ left: `${i * columnWidth}px`, width: "1px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineGrid;

