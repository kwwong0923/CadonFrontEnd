import React, { useContext } from 'react'

// Context

// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    const 
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Login</a>
                </li>

                <li>
                    <a href="#">Register</a>
                </li>

                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav