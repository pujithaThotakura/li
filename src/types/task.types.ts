export interface TimelineTask {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  progress: number; // 0 - 100
  rowId: string;

  // Optional details
  color?: string;
  assignee?: string;
  isMilestone?: boolean;
  dependencies?: string[];
  notes?: string;
}
