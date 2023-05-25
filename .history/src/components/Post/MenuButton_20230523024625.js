import React, {useContext} from 'react'
// Context
import { AppContext } from '../../App';
// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
    const { user } = useContext(AppContext);
    const [currentUser, setCurrentUser] = user;

  return (
    <div className>
        
    </div>
  )
}

export default MenuButton