import React, { useContext , useState} from 'react'
// Context
import { AppContext } from '../../App';
import Login from '../User/Login';
import Register from '../User/Register';
// CSS Module
import styles from "./Nav.module.css";
const Nav = () => {
    const [currentUser, setCurrentUser] = useContext(AppContext);
    const [loginShown, setLoginShown] = useState(false);
    const [registerShown, setRegisterShown] = useState(false);
    const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
    const onRegisterClickHandler = () =>
    {
        setRegisterShown(!registerShown);
    }

    const onLoginClickHandler = () =>
    {
        setLoginShown(!registerShown);
    }
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Login</a>
                </li>
                {loginShown && <Login />
                }
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