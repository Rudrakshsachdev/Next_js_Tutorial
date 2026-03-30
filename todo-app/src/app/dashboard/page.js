"use client";
import TodoInput from "@/components/todos/TodoInput";
import TodoList from "@/components/todos/TodoList";
import styles from "../app-theme.module.css";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  const fetchTodosData = async () => {
    const res = await fetch("/api/todos");
    const text = await res.text();

    let data;
    try {
      data = text ? JSON.parse(text) : [];
    } catch {
      throw new Error("Invalid JSON response from /api/todos");
    }

    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch todos");
    }

    return Array.isArray(data) ? data : [];
  };

  const refreshTodos = async () => {
    const data = await fetchTodosData();
    setTodos(data);
  };

  useEffect(() => {
    let isMounted = true;

    const loadTodos = async () => {
      try {
        const data = await fetchTodosData();
        if (isMounted) {
          setTodos(data);
        }
      } catch (error) {
        console.error("Failed to load todos:", error);
        if (isMounted) {
          setTodos([]);
        }
      }
    };

    loadTodos();

    return () => {
      isMounted = false;
    };
  }, []);

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
          <TodoInput refreshTodos={refreshTodos} />
          <TodoList todos={todos} refreshTodos={refreshTodos} />
        </div>
      </section>
    </main>
  );
}
