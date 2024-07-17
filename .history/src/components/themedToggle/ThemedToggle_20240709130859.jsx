"use client"
import Image from "next/image"
import styles from "./themedToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemedToggle = () => {


const {theme} = useContext(ThemeContext)




  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="Dark mode" height={14} width={14}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="Dark mode" height={14} width={14}/>
    </div>
  )
}

export default ThemedToggle