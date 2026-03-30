import Link from "next/link";
import styles from "../../app-theme.module.css";

export default function Register() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Register</h1>
          <p className={styles.subheading}>
            Create an account to start organizing your tasks with a clean,
            focused dashboard experience.
          </p>
          <div className={styles.actions}>
            <Link href="/auth/login" className={styles.linkButton}>
              Already have an account?
            </Link>
            <Link href="/dashboard" className={styles.primaryButton}>
              Continue to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
