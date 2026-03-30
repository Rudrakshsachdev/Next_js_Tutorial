import Link from "next/link";
import styles from "../../app-theme.module.css";

export default function Login() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Login</h1>
          <p className={styles.subheading}>
            Access your workspace and continue managing tasks efficiently.
          </p>
          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.primaryButton}>
              Go to Dashboard
            </Link>
            <Link href="/auth/register" className={styles.linkButton}>
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
