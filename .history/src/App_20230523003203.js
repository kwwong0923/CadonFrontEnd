import React, { useState, Fragment, createContext } from "react";

// Components
import Logo from "./components/NavBar/Logo";
import 
// CSS Module
import styles from "./App.module.css";
export const AppContext = createContext();
function App() {
  return (
    <AppContext.Provider value={[]}>
      <Fragment>
        <header>
          <section className={styles.topLeft}>
            <Logo />
            
          </section>
          <section className={styles.topRight}></section>
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
