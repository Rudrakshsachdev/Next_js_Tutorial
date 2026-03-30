"use client";

import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ refreshTodos }) {
  const [text, setText] = useState("");

  const handleAdd = async () => {
    if (!text.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: text }),
    });

    setText("");
    refreshTodos();
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
