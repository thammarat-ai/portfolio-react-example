import React from 'react'
import styles from './Hero.module.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text1}>Hello, There</p>
                <h3 className={styles.text2}>ธรรมรัตน์</h3>
                <p className={styles.text3}>
                    I'm a full stack dev.
                </p>
                <p className={styles.text4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga quis neque maiores mollitia odit impedit dolor laudantium illo facilis 
                    dolorem necessitatibus voluptatum veniam tempore deserunt 
                    illum dolores blanditiis quaerat.
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                </ul>
            </div>

            <div className={styles.hero_image}></div>
        </div>
      </div>
      
      
      
      
      
      
      
    </div>
  )
}

export default Hero
