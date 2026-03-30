import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}