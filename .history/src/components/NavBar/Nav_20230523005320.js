import React, { useContext } from 'react'
// Context
import { AppContext } from '../../App';
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    const [currentUser = useContext(AppContext);
    const setCurrentUser = useContext(AppContext);
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