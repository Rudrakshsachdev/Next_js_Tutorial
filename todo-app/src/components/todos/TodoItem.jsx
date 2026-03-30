"use client";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, refreshTodos }) {
  const handleDelete = async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: "DELETE",
    });
    refreshTodos();
  }

  return (
    <div className={styles.item}>
      <span className={styles.title}>{todo.title}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
