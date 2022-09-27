import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
// import Header from "./components/Header"; 
import Page from "./components/Page"; /* Includes Components: About, Portfolio, Contact, & Resume */
import DrawerAppBar from "./components/DrawerAppBar"; /* Includes Component: Navigation */

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
      <DrawerAppBar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
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
