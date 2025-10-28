import React from "react";
import { TimelineTask } from "./TimelineView.types";

interface TaskBarProps {
  task: TimelineTask;
  left: number;
  width: number;
  onClick?: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ task, left, width, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${task.title}, ${task.progress}% complete`}
      onClick={onClick}
      className="absolute top-2 h-8 rounded-md shadow-md cursor-pointer transition-all hover:shadow-lg"
      style={{
        left: `${left}px`,
        width: `${width}px`,
        backgroundColor: task.color || "#0ea5e9",
      }}
    >
      <div className="flex justify-between items-center h-full px-2 text-xs text-white">
        <span className="truncate">{task.title}</span>
        {!task.isMilestone && (
          <span className="opacity-80">{task.progress}%</span>
        )}
      </div>

      {/* progress overlay */}
      {!task.isMilestone && task.progress > 0 && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-white opacity-50 rounded-b"
          style={{ width: `${task.progress}%` }}
        />
      )}
    </div>
  );
};

export default TaskBar;
