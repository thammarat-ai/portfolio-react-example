import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
            <div className={styles.logo}>
                <a href="#">TT Portfolio</a>
            </div>

            <ul>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfilo</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className={styles.button}>
                <a href="#">Hire me</a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

