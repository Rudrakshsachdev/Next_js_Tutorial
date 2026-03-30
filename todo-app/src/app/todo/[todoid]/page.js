import Link from "next/link";
import styles from "../../app-theme.module.css";

export default async function todoid({ params }) {
  const { todoid } = await params;

  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Todo #{todoid}</h1>
          <p className={styles.subheading}>
            This page contains details for todo item {todoid}. Keep notes,
            progress, and next steps here.
          </p>
          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.primaryButton}>
              Back to Dashboard
            </Link>
            <Link href="/" className={styles.linkButton}>
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
