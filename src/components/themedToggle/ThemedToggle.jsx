"use client";
import Image from "next/image";
import styles from "./themedToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemedToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="Dark mode" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? {  backgroundColor: "white" }
            : {  backgroundColor: "#0f172a" }
        }
      ></div>

      <Image src="/sun.png" alt="Dark mode" height={14} width={14} />
    </div>
  );
};

export default ThemedToggle;
