// ✅ Format a date as "DD MMM YYYY"
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ✅ Format progress number to readable text
export const formatProgress = (progress: number): string => {
  if (progress === 100) return "Completed";
  if (progress > 50) return "In Progress";
  if (progress > 0) return "Started";
  return "Not Started";
};

// ✅ Format duration in days/weeks
export const formatDuration = (start: Date, end: Date): string => {
  const diff = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff < 7) return `${diff} days`;
  const weeks = Math.round(diff / 7);
  return `${weeks} week${weeks > 1 ? "s" : ""}`;
};
