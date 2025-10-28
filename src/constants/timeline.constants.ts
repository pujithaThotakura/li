export const TIMELINE_CONSTANTS = {
  // Default start and end range for initial view
  DEFAULT_START_DATE: new Date(2024, 0, 1), // Jan 1, 2024
  DEFAULT_END_DATE: new Date(2024, 0, 31), // Jan 31, 2024

  // Default pixel scaling per day for each zoom level
  PIXELS_PER_DAY: {
    day: 40,
    week: 80,
    month: 120,
  },

  // Default row height (used in positioning calculations)
  ROW_HEIGHT: 50,

  // Minimum width for a task bar
  MIN_TASK_WIDTH: 8,

  // Default transition duration for animations
  ANIMATION_SPEED: 250,
};
