"use client";

import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ refreshTodos }) {
  const [text, setText] = useState("");

  const handleAdd = async () => {
    if (!text.trim()) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: text }),
    });

    if (!res.ok) {
      const message = await res.text();
      console.error("Failed to create todo:", message);
      return;
    }

    setText("");
    await refreshTodos();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
