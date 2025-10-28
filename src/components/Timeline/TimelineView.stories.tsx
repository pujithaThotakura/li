import TimelineView from "./TimelineView";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TimelineView> = {
  title: "Components/TimelineView",
  component: TimelineView,
};

export default meta;
type Story = StoryObj<typeof TimelineView>;

const sampleRows = [
  { id: "row-1", label: "Frontend Team", tasks: ["task-1", "task-2"] },
  { id: "row-2", label: "Backend Team", tasks: ["task-3"] },
];

const sampleTasks = {
  "task-1": {
    id: "task-1",
    title: "UI Component",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 10),
    progress: 60,
    rowId: "row-1",
    color: "#0ea5e9",
  },
  "task-2": {
    id: "task-2",
    title: "Integration",
    startDate: new Date(2024, 0, 12),
    endDate: new Date(2024, 0, 20),
    progress: 20,
    rowId: "row-1",
    color: "#0ea5e9",
  },
  "task-3": {
    id: "task-3",
    title: "API Development",
    startDate: new Date(2024, 0, 5),
    endDate: new Date(2024, 0, 15),
    progress: 80,
    rowId: "row-2",
    color: "#10b981",
  },
};

export const Default: Story = {
  args: {
    rows: sampleRows,
    tasks: sampleTasks,
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 30),
    viewMode: "day",
    onTaskUpdate: () => {},
    onTaskMove: () => {},
  },
};
