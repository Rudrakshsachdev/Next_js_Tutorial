"use client";

import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ setTodos }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: text,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
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
