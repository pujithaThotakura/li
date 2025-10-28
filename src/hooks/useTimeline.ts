import { useState } from "react";
import { TimelineRow, TimelineTask } from "@/components/Timeline/TimelineView.types";

export const useTimeline = (initialRows: TimelineRow[], initialTasks: Record<string, TimelineTask>) => {
  const [rows, setRows] = useState<TimelineRow[]>(initialRows);
  const [tasks, setTasks] = useState<Record<string, TimelineTask>>(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const updateTask = (taskId: string, updates: Partial<TimelineTask>) => {
    setTasks((prev) => ({
      ...prev,
      [taskId]: { ...prev[taskId], ...updates },
    }));
  };

  const moveTask = (taskId: string, newRowId: string, newStartDate: Date) => {
    setTasks((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        rowId: newRowId,
        startDate: newStartDate,
      },
    }));
  };

  const selectTask = (taskId: string | null) => {
    setSelectedTaskId(taskId);
  };

  return {
    rows,
    tasks,
    selectedTaskId,
    selectTask,
    updateTask,
    moveTask,
  };
};
