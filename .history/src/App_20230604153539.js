import React, { Fragment, useContext, useEffect } from "react";
// Context
import { AppProvider, AppContext, use } from "./context/App.provider";
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

  useEffect(() => {
    const handleScroll = () => {
      let position = window.scrollY;
      setScrollPosition(position);
    };

    const showMenu = () => {
      if (window.innerWidth < 500) {
        
      }else
      {
        

      }
    };
    window.addEventListener("resize", showMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", showMenu);
    };
  }, []);
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
