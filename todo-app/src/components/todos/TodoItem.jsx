"use client";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, setTodos }) {
  const handleDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div className={styles.item}>
      <span className={styles.title}>{todo.title}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
