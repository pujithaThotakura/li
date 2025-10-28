import { TimelineRow, TimelineTask } from "@/components/Timeline/TimelineView.types";

/**
 * ✅ Check if a date range is valid (start before end)
 */
export const isValidDateRange = (startDate: Date, endDate: Date): boolean => {
  return startDate.getTime() <= endDate.getTime();
};

/**
 * ✅ Validate that all tasks have proper date ranges
 */
export const validateTaskDates = (
  tasks: Record<string, TimelineTask>
): string[] => {
  const errors: string[] = [];

  Object.values(tasks).forEach((task) => {
    if (!isValidDateRange(task.startDate, task.endDate)) {
      errors.push(
        `❌ Task "${task.title}" has invalid dates (${task.startDate.toDateString()} → ${task.endDate.toDateString()})`
      );
    }
  });

  return errors;
};

/**
 * ✅ Validate dependencies (ensure referenced task IDs exist)
 */
export const validateDependencies = (
  tasks: Record<string, TimelineTask>
): string[] => {
  const taskIds = Object.keys(tasks);
  const errors: string[] = [];

  Object.values(tasks).forEach((task) => {
    if (task.dependencies && task.dependencies.length > 0) {
      task.dependencies.forEach((depId) => {
        if (!taskIds.includes(depId)) {
          errors.push(`❌ Dependency error: "${task.title}" depends on missing task ID "${depId}"`);
        }
      });
    }
  });

  return errors;
};

/**
 * ✅ Validate that tasks in a row don't overlap (optional, advanced)
 */
export const validateTaskOverlaps = (
  rows: TimelineRow[],
  tasks: Record<string, TimelineTask>
): string[] => {
  const errors: string[] = [];

  rows.forEach((row) => {
    const rowTasks = row.tasks
      .map((id) => tasks[id])
      .filter(Boolean)
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    for (let i = 0; i < rowTasks.length - 1; i++) {
      const current = rowTasks[i];
      const next = rowTasks[i + 1];
      if (current.endDate > next.startDate) {
        errors.push(
          `⚠️ Overlap: "${current.title}" and "${next.title}" overlap in row "${row.label}"`
        );
      }
    }
  });

  return errors;
};

/**
 * ✅ Run all validations at once
 */
export const validateTimelineData = (
  rows: TimelineRow[],
  tasks: Record<string, TimelineTask>
): string[] => {
  const dateErrors = validateTaskDates(tasks);
  const depErrors = validateDependencies(tasks);
  const overlapErrors = validateTaskOverlaps(rows, tasks);

  return [...dateErrors, ...depErrors, ...overlapErrors];
};
