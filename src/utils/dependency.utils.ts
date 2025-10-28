import { TimelineTask } from "@/components/Timeline/TimelineView.types";
import { calculatePosition } from "./position.utils";

export interface DependencyCoords {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

export const calculateDependencyCoords = (
  fromTask: TimelineTask,
  toTask: TimelineTask,
  startDate: Date,
  pixelsPerDay: number,
  rowIndexFrom: number,
  rowIndexTo: number
): DependencyCoords => {
  const taskHeight = 50;
  const fromX =
    calculatePosition(fromTask.endDate, startDate, pixelsPerDay) + 10;
  const toX = calculatePosition(toTask.startDate, startDate, pixelsPerDay) - 10;

  const fromY = rowIndexFrom * taskHeight + 30;
  const toY = rowIndexTo * taskHeight + 30;

  return {
    from: { x: fromX, y: fromY },
    to: { x: toX, y: toY },
  };
};
