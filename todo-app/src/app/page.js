import Link from "next/link";
import styles from "./app-theme.module.css";

export default function Home() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Todo App</h1>
          <p className={styles.subheading}>
            Organize work with a modern workflow. Add tasks, track progress, and
            keep your dashboard clear with the same visual language as the
            navbar.
          </p>
          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.primaryButton}>
              Open Dashboard
            </Link>
            <Link href="/auth/login" className={styles.linkButton}>
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
