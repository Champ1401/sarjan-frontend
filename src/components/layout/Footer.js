// src/components/layout/Footer.jsx
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <h2>Sargan <span>AI</span></h2>
          <p>Where ideas think together.</p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Product</h4>
            <p>Studio</p>
            <p>Agents</p>
            <p>Pricing</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Privacy</p>
            <p>Contact</p>
          </div>
        </div>

      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Sargan AI
      </p>
    </footer>
  )
}
