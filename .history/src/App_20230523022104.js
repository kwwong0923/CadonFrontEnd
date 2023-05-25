import React, { useState, Fragment, createContext } from "react";

// Components
// Nav
import Logo from "./components/NavBar/Logo";
import CategorySelection from "./components/NavBar/CategorySelection";
import Nav from "./components/NavBar/Nav";
// Main

// CSS Module
import styles from "./App.module.css";
// Services
import authService from "./services/auth.service";
export const AppContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPost, setCurrentPost] = useState(null);
  const [filteredPosts, setFilterPosts] = useState([]);

  return (
    <AppContext.Provider value={{ user: [currentUser, setCurrentUser], posts: [currentPost, setCurrentPost]}}>
      <Fragment>
        <header>
          <section className={styles.topLeft}>
            <Logo />
            <CategorySelection />
          </section>
          <section className={styles.topRight}>
            <Nav />
          </section>
        </header>
        <main>
          <section className={styles.centerLeft}></section>
          <section className={styles.centerRight}></section>
        </main>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;
