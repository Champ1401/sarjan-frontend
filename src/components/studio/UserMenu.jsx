import { useState } from 'react'
import styles from '../../styles/Sidebar.module.css'

export default function UserMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.user}>
      <div className={styles.userInfo} onClick={() => setOpen(!open)}>
        <div>
          <strong>Jignesh</strong>
          <p>jignesh@email.com</p>
        </div>
      </div>

      {open && (
        <div className={styles.menu}>
          <p>Profile</p>
          <p>Settings</p>
          <p className={styles.logout}>Logout</p>
        </div>
      )}
    </div>
  )
}
