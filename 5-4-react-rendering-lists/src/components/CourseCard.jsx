// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {

  // Toggle task done status
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  // Delete task
  function deleteTask(id) {
    onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
  }

  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every((t) => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3: Show “All caught up” badge only if all tasks done */}
        {allDone && <span className="badge">All caught up 🎉</span>}
      </header>

      <section className="tasksSection">
        {/* Show message if no tasks */}
        {!hasTasks && <p className="muted">No tasks yet.</p>}

        <ul className="tasks">
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
