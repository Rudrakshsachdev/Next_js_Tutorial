import styles from "./Navbar.module.css";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Navbar() {
  return (
    <header className={`${styles.shell} ${spaceGrotesk.className}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon}>T</span>
          <span className={styles.brandText}>
            <strong>TodoApp</strong>
            <small>Plan. Track. Finish.</small>
          </span>
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.linkItem}>
            Home
          </Link>
          <Link href="/dashboard" className={styles.linkItem}>
            Dashboard
          </Link>
          <Link href="/dashboard" className={styles.cta}>
            Start Working
          </Link>
          <Link href="/auth/login" className={styles.linkItem}>
            Login
          </Link>
          <Link href="/auth/register" className={styles.linkItem}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
