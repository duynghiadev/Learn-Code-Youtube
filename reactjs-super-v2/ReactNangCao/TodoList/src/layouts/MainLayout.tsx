import styles from './mainlayout.module.scss'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.sidenav}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default MainLayout
