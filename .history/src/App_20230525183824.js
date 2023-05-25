import React, { Fragment, useContext } from "react";
// Context
import { AppProvider, AppContext } from "./context/App.provider";
// Components
// Nav
import Logo from "./components/NavBar/Logo";
import CategorySelection from "./components/NavBar/CategorySelection";
import Nav from "./components/NavBar/Nav";
// Main - Left
import SearchBar from "./components/Post/SearchBar";
import MenuButton from "./components/Post/MenuButton";
import PostList from "./components/Post/PostList";
// Main - Right
import PostTopBar from "./components/Post/PostTopBar";
import PostContent from "./components/Post/PostContent";
// CSS Module
import styles from "./App.module.css";


function App() {
  return (
    <AppProvider>
      <Fragment>
        <header>
          <section className={styles.topLeft}>
            <Logo />
            <CategorySelection className={styles.CategorySelection}/>
          </section>
          <section class
            <Nav />
          </section>
        </header>
        <main>
          <section className={styles.centerLeft}>
            <SearchBar />
            <MenuButton />
            <PostList />
          </section>
          <section className={styles.centerRight}>
            <PostTopBar />
            <PostContent />
          </section>
        </main>
      </Fragment>
    </AppProvider>
  );
}

export default App;
