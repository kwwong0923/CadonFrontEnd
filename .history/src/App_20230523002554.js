import React, { useState, Fragment, createContext } from "react";

// CSS Module
import styles from "./App.module.css";
export const AppContext = createContext();
function App() {
  return (
    <AppContext.Provider value={[]}>
      <Fragment>
        <header>
          <section className={styles.topLeft}></section>
          <section className={styles.topRight}></section>
        </header>
        <main>
          <section className={styles.left}></section>
          <section className={styles.right}></section>
        </main>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;