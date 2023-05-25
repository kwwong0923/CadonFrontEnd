import React, { useState, Fragment, createContext } from "react";

// CSS Module
import styles from "./App.module.css";
export const AppContext = createContext();
function App() {
  return (
    <AppContext.Provider value={[]}>
      <Fragment>
        <header>
          <section className={styles.top-left}></section>
          <section className={styles.top-right}></section>
        </header>
        <main>

        </main>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;
