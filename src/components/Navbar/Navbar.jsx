import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#"> TT Port</a>
          </div>

          <ul>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className={styles.button}>
            <a href="#">Hire Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
