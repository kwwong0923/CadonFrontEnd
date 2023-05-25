import React from 'react'

// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    return (
        <nav className={styles.}>
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