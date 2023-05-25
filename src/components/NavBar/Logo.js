import React from 'react'

// CSS Module
import styles from "./Logo.module.css"
const Logo = () => {
    return (
        <img className={styles.logoImg} src="./icons/logo_tran.png" alt="LOGO"/>
    )
}

export default Logo