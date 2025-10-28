import { getDaysBetween, addDays } from "./date.utils";

// ✅ Convert a date to its X position on the timeline (in pixels)
export const calculatePosition = (
  date: Date,
  startDate: Date,
  pixelsPerDay: number
): number => {
  const days = getDaysBetween(startDate, date);
  return days * pixelsPerDay;
};

// ✅ Calculate the pixel width of a task bar
export const calculateDuration = (
  startDate: Date,
  endDate: Date,
  pixelsPerDay: number
): number => {
  const days = getDaysBetween(startDate, endDate);
  return Math.max(days * pixelsPerDay, pixelsPerDay * 0.5);
};

// ✅ Generate array of time labels for grid header
export const generateTimeScale = (
  startDate: Date,
  endDate: Date,
  viewMode: "day" | "week" | "month"
) => {
  const scale: { label: string; date: Date }[] = [];
  const totalDays = getDaysBetween(startDate, endDate);

  for (let i = 0; i <= totalDays; i++) {
    const currentDate = addDays(startDate, i);
    if (viewMode === "day") {
      scale.push({
        label: currentDate.toLocaleDateString("en-US", { day: "2-digit" }),
        date: currentDate,
      });
    } else if (viewMode === "week" && currentDate.getDay() === 1) {
      scale.push({
        label: `Week ${Math.ceil(i / 7)}`,
        date: currentDate,
      });
    } else if (viewMode === "month" && currentDate.getDate() === 1) {
      scale.push({
        label: currentDate.toLocaleString("default", { month: "short" }),
        date: currentDate,
      });
    }
  }
  return scale;
};
y