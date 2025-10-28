import { useState, useCallback } from "react";
import { TimelineTask } from "@/components/Timeline/TimelineView.types";

interface DragState {
  isDragging: boolean;
  taskId: string | null;
  startX: number;
  startLeft: number;
}

export const useDragAndDrop = (
  tasks: Record<string, TimelineTask>,
  onMove: (taskId: string, newRowId: string, newStartDate: Date) => void
) => {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    taskId: null,
    startX: 0,
    startLeft: 0,
  });

  const startDrag = useCallback((taskId: string, event: React.MouseEvent) => {
    setDragState({
      isDragging: true,
      taskId,
      startX: event.clientX,
      startLeft: event.currentTarget.getBoundingClientRect().left,
    });
  }, []);

  const stopDrag = useCallback(() => {
    setDragState((prev) => ({ ...prev, isDragging: false, taskId: null }));
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent, pixelsPerDay: number, startDate: Date) => {
      if (!dragState.isDragging || !dragState.taskId) return;

      const deltaX = event.clientX - dragState.startX;
      const daysMoved = Math.round(deltaX / pixelsPerDay);
      const task = tasks[dragState.taskId];
      if (!task) return;

      const newStart = new Date(task.startDate);
      newStart.setDate(task.startDate.getDate() + daysMoved);

      onMove(task.id, task.rowId, newStart);
    },
    [dragState, onMove, tasks]
  );

  return {
    dragState,
    startDrag,
    stopDrag,
    handleMouseMove,
  };
};
