import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo do Board" />
        </Link>
        <nav>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/board">
            <p>Meu Board</p>
          </Link>
        </nav>

       <SignInButton/>
      </div>
    </header>
  );
}
