// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* Checkbox reflects task.isDone and calls onToggle */}
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        {/* Show DueBadge only if task is not done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* Display task title */}
        <span className="title">{task.title}</span>
      </label>

      {/* Delete button */}
      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}
