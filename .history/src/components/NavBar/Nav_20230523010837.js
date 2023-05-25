import React, { useContext } from 'react'
// Context
import { AppContext } from '../../App';
import Login from '../User/Login';
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    const [currentUser, setCurrentUser] = useContext(AppContext);
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Login</a>
                </li>
                <Login />

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