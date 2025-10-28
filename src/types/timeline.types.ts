import { TimelineTask } from "./task.types";

export type ViewMode = "day" | "week" | "month";

export interface TimelineRow {
  id: string;
  label: string;
  tasks: string[]; // Array of task IDs
  color?: string;
}

export interface TimelineDependency {
  from: string; // Task ID
  to: string;   // Task ID
}

export interface TimelineViewProps {
  rows: TimelineRow[];
  tasks: Record<string, TimelineTask>;
  startDate: Date;
  endDate: Date;
  viewMode: ViewMode;

  onTaskUpdate: (taskId: string, updates: Partial<TimelineTask>) => void;
  onTaskMove: (taskId: string, newRowId: string, newStartDate: Date) => void;
  onDependencyAdd?: (fromId: string, toId: string) => void;
}
