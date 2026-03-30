import styles from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <span className={styles.title}>{todo.title}</span>
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  );
}
