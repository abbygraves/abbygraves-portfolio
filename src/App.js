// INCOMPLETE: STILL NEED FOOTER

import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header"; /* Includes Component: Navigation */
import Page from "./components/Page"; /* Includes Components: About, Portfolio, Contact, & Resume */

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [pageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <Header
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <section className="hero">
        <div className="hero-name">
          <p>Abby Graves</p>
          <div className="hero-text">
            <p>Developer Stuff</p>
          </div>
        </div>
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
