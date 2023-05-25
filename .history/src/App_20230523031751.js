import React, { useState, Fragment, createContext } from "react";

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
// Services
import AuthService from "./services/auth.service";
// Context
import { AppProvider } from "./context/App.provider";
export const AppContext = createContext();

function App() {
  // State
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [currentPost, setCurrentPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [filteredPosts, setFilterPosts] = useState([]);
  const contextObj = {
    user: [currentUser, setCurrentUser],
    post: [currentPost, setCurrentPost],
    category: [selectedCategory, setSelectedCategory],
    postList: [filteredPosts, setFilterPosts]
  };
  return (
    <AppProvider
      value={contextObj}
    >
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

// import React, { useState, Fragment, createContext } from "react";

// // Components
// // Nav
// import Logo from "./components/NavBar/Logo";
// import CategorySelection from "./components/NavBar/CategorySelection";
// import Nav from "./components/NavBar/Nav";
// // Main - Left
// import SearchBar from "./components/Post/SearchBar";
// import MenuButton from "./components/Post/MenuButton";

// // CSS Module
// import styles from "./App.module.css";
// // Services
// import AuthService from "./services/auth.service";
// export const AppContext = createContext();

// function App() {
//   // State
//   const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
//   const [currentPost, setCurrentPost] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("General");
//   const [filteredPosts, setFilterPosts] = useState([]);
//   const contextObj = {
//     user: [currentUser, setCurrentUser],
//     post: [currentPost, setCurrentPost],
//     category: [selectedCategory, setSelectedCategory],
//     postList: [filteredPosts, setFilterPosts]
//   };
//   return (
//     <AppContext.Provider
//       value={contextObj}
//     >
//       <Fragment>
//         <header>
//           <section className={styles.topLeft}>
//             <Logo />
//             <CategorySelection />
//           </section>
//           <section className={styles.topRight}>
//             <Nav />
//           </section>
//         </header>
//         <main>
//           <section className={styles.centerLeft}>
//             <SearchBar />
//             <MenuButton />
//           </section>
//           <section className={styles.centerRight}></section>
//         </main>
//       </Fragment>
//     </AppContext.Provider>
//   );
// }

// export default App;
