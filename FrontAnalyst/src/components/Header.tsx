"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Analyst Store</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.button}>Inicio</Link>
        <Link href="/historyChanges" className={styles.button}>Historial</Link>
      </nav>
    </header>
  );
}
