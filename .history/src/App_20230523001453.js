import React, { useState, Fragment, createContext } from "react";

export const AppContext = createContext();
function App() {
  return (
    <AppContext.Provider value={[]}
    <Fragment>
      <header>
        <section className="top-left">

        </section>
        <section className="top-right">

        </section>
      </header>
      <main>

      </main>
    </Fragment>
  );
}

export default App;
