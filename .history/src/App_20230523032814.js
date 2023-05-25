import React, { Fragment } from "react";
// Components
// Nav
import Logo from "./components/NavBar/Logo";
import CategorySelection from "./components/NavBar/CategorySelection";
import Nav from "./components/NavBar/Nav";
// Main - Left
import SearchBar from "./components/Post/SearchBar";
import MenuButton from "./components/Post/MenuButton";
// CSS Module
import styles from "./App.module.css";
// Context
import { AppProvider } from "./context/App.provider";

function App() {
  return (
    <AppProvider>
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
          <section className={styles.centerLeft}>
            <SearchBar />
            <MenuButton />
          </section>
          <section className={styles.centerRight}></section>
        </main>
      </Fragment>
    </AppProvider>
  );
}

export default App;
