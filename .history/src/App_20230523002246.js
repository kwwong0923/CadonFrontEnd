import React, { useState, Fragment, createContext } from "react";

// CSS Module
import styles from "./App.module.css";
export const AppContext = createContext();
function App() {
  return (
    <AppContext.Provider value={[]}>
      <Fragment>
        <header>
          <section className="stylestop-left"></section>
          <section className="top-right"></section>
        </header>
        <main>
          <section className="left"></section>
          <section className="right"></section>
        </main>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;
