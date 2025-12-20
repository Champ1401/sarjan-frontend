// src/components/layout/Header.jsx
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Link href="/" className={styles.logo}>
          <span>Sargan</span><em>AI</em>
        </Link>

        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#agents">Agents</a>
          <a href="#demo">Demo</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.login}>Login</button>
          <button className={styles.cta}>Get Started</button>
        </div>

      </div>
    </header>
  )
}
