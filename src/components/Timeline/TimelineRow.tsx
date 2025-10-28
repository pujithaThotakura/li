import React from "react";
import { TimelineRow, TimelineTask } from "./TimelineView.types";
import TaskBar from "./TaskBar";
import { calculatePosition, calculateDuration } from "@/utils/position.utils";

interface TimelineRowProps {
  row: TimelineRow;
  tasks: Record<string, TimelineTask>;
  startDate: Date;
  pixelsPerDay: number;
  onTaskClick?: (task: TimelineTask) => void;
}

const TimelineRow: React.FC<TimelineRowProps> = ({
  row,
  tasks,
  startDate,
  pixelsPerDay,
  onTaskClick,
}) => {
  return (
    <div
      role="region"
      aria-label={`${row.label} timeline with ${row.tasks.length} tasks`}
      className="relative border-b border-neutral-200 h-16"
    >
      {/* Render each task inside the row */}
      {row.tasks.map((taskId) => {
        const task = tasks[taskId];
        if (!task) return null;

        const left = calculatePosition(task.startDate, startDate, pixelsPerDay);
        const width = calculateDuration(task.startDate, task.endDate, pixelsPerDay);

        return (
          <TaskBar
            key={task.id}
            task={task}
            left={left}
            width={width}
            onClick={() => onTaskClick?.(task)}
          />
        );
      })}
    </div>
  );
};

export default TimelineRow;
