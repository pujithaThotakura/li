import React, { useState } from "react";
import TimelineRow from "./TimelineRow";
import TimelineGrid from "./TimelineGrid";
import TaskDetailSidebar from "./TaskDetailSidebar";
import DependencyLine from "./DependencyLine";
import { TimelineViewProps } from "./TimelineView.types";

const TimelineView: React.FC<TimelineViewProps> = ({
  rows,
  tasks,
  startDate,
  endDate,
  viewMode,
  onTaskUpdate,
  onTaskMove,
}) => {
  const pixelsPerDay = viewMode === "day" ? 40 : viewMode === "week" ? 80 : 120;
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  return (
    <div className="flex bg-neutral-50 h-screen overflow-hidden">
      {/* Left Panel */}
      <div className="w-52 border-r bg-neutral-100 p-4 sticky left-0 z-10">
        {rows.map((row) => (
          <div key={row.id} className="py-2 font-medium text-neutral-700">
            {row.label}
          </div>
        ))}
      </div>

      {/* Right Panel */}
      <div className="flex-1 overflow-auto relative">
        <TimelineGrid
          startDate={startDate}
          endDate={endDate}
          viewMode={viewMode}
          pixelsPerDay={pixelsPerDay}
        />

        {rows.map((row) => (
          <TimelineRow
            key={row.id}
            row={row}
            tasks={tasks}
            startDate={startDate}
            pixelsPerDay={pixelsPerDay}
            onTaskClick={(t) => setSelectedTask(t.id)}
          />
        ))}

        {/* (Optional) Dependency Lines go here later */}
      </div>

      {/* Sidebar */}
      <TaskDetailSidebar
        isOpen={!!selectedTask}
        task={selectedTask ? tasks[selectedTask] : undefined}
        onClose={() => setSelectedTask(null)}
        onUpdate={(updates) => {
          if (!selectedTask) return;
          onTaskUpdate(selectedTask, updates);
        }}
      />
    </div>
  );
};

export default TimelineView;
