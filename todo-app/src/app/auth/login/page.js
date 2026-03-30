"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../app-theme.module.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setError(payload?.error || "Unable to login");
        return;
      }

      localStorage.setItem("todo-user", JSON.stringify(payload.user));
      router.push("/dashboard");
    } catch (submitError) {
      setError("Something went wrong. Please try again.");
      console.error("Login error:", submitError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Login</h1>
          <p className={styles.subheading}>
            Access your workspace and continue managing tasks efficiently.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            {error ? <p className={styles.errorText}>{error}</p> : null}

            <button className={styles.button} type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className={styles.actions}>
            <Link href="/auth/register" className={styles.linkButton}>
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
