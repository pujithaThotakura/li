import React from "react";
import { TimelineTask } from "./TimelineView.types";

interface TaskDetailSidebarProps {
  task?: TimelineTask;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updates: Partial<TimelineTask>) => void;
}

const TaskDetailSidebar: React.FC<TaskDetailSidebarProps> = ({
  task,
  isOpen,
  onClose,
  onUpdate,
}) => {
  if (!isOpen || !task) return null;

  return (
    <aside
      role="complementary"
      aria-label="Task details"
      aria-hidden={!isOpen}
      className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-neutral-200 shadow-modal transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 overflow-y-auto h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-neutral-900">{task.title}</h2>
          <button
            onClick={onClose}
            className="text-neutral-600 hover:text-neutral-900"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <label className="block font-medium mb-1">Progress</label>
            <input
              type="range"
              min={0}
              max={100}
              value={task.progress}
              onChange={(e) =>
                onUpdate({ progress: Number(e.target.value) })
              }
              className="w-full"
            />
            <span className="text-neutral-600">{task.progress}%</span>
          </div>

          <div>
            <label className="block font-medium mb-1">Assignee</label>
            <input
              type="text"
              defaultValue={task.assignee}
              onChange={(e) => onUpdate({ assignee: e.target.value })}
              className="w-full border border-neutral-300 rounded px-2 py-1"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Notes</label>
            <textarea
              defaultValue={(task as any).notes || ""}
              onChange={(e) => onUpdate({ notes: e.target.value })}
              className="w-full border border-neutral-300 rounded px-2 py-1 h-24"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TaskDetailSidebar;
