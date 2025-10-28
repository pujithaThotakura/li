// ✅ Calculate number of days between two dates
export const getDaysBetween = (start: Date, end: Date): number => {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((end.getTime() - start.getTime()) / msPerDay);
};

// ✅ Add specific number of days to a date
export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

// ✅ Generate list of dates between two dates
export const generateDateRange = (start: Date, end: Date): Date[] => {
  const range: Date[] = [];
  const current = new Date(start);
  while (current <= end) {
    range.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return range;
};

// ✅ Compare if two dates fall on same day
export const isSameDay = (a: Date, b: Date): boolean => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};
