import React, {useContext} from 'react'
// Context
import { AppContext } from '../../App';
// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
    const { user, category } = useContext(AppContext);
    const [currentUser, setCurrentUser] = user;

  return (
    <div className={styles.menuButtons}>
        <button className="menu-button">{selectedCategory}</button>
    </div>
  )
}

export default MenuButton