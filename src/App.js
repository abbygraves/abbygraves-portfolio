// INCOMPLETE

import React, { useState } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import Header from "./components/Header"; /* Includes Component: Navigation */
import Page from "./components/Page"; /* Includes Components: About, Portfolio, Contact, & Resume */

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header
        setCurrentPage={setCurrentPage}
        pages={pages}
        currentPage={currentPage}
      />
      <section className="hero">
        <div className="hero-name">
          <p>Abby Graves</p>
          <div className="hero-text">
            <p>Developer Stuff</p>
          </div>
        </div>
      </section>
      <main className="sections">
        <Page currentPage={currentPage} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
