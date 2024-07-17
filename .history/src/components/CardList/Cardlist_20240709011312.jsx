import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from "../pagination/pagination"

const Cardlist = () => {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}

export default Cardlist