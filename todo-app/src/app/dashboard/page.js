"use client";
import TodoInput from "@/components/todos/TodoInput";
import TodoList from "@/components/todos/TodoList";
import styles from "../app-theme.module.css";
import { useState } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Dashboard</h1>
          <p className={styles.subheading}>
            Manage your day with focused priorities. Add tasks quickly and keep
            everything visible in one place.
          </p>
        </div>

        <div className={`${styles.card} ${styles.stack}`}>
          <TodoInput setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </section>
    </main>
  );
}
