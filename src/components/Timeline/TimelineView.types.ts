export interface TimelineTask {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  rowId: string;
  color?: string;
  dependencies?: string[];
}

export interface TimelineRow {
  id: string;
  label: string;
  tasks: string[];
}

export interface TimelineViewProps {
  rows: TimelineRow[];
  tasks: Record<string, TimelineTask>;
  startDate: Date;
  endDate: Date;
  viewMode: "day" | "week" | "month";
  onTaskUpdate: (taskId: string, updates: Partial<TimelineTask>) => void;
  onTaskMove: (taskId: string, newRowId: string, newStartDate: Date) => void;
}
