import React, { useContext , useState} from 'react'
// Context
import { AppContext } from '../../App';
import Login from '../User/Login';
import Register from '../User/Register';
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    const [currentUser, setCurrentUser] = useContext(AppContext);
    const [registerShown, setRegisterShown] = useState(false);
    const [registerSuccessfully, set]
    const onRegisterClickHandler = () =>
    {
        setRegisterShown(!registerShown);
    }
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Login</a>
                </li>

                <li>
                    <a href="#" onClick={onRegisterClickHandler}>Register</a>
                </li>
                { registerShown && <Register onRegisterClickHandler={onRegisterClickHandler}/>}

                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav