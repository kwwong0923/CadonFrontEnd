import React, {useContext} from 'react'
// Context
import { AppContext } from '../../App';
// CSS
import styles from "./MenuButton.module.css";
const MenuButton = () => {
    const { user } = useContext(AppContext);
    const   const [currentUser, setCurrentUser] = user;

  return (
    <div>
        
    </div>
  )
}

export default MenuButton