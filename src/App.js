// INCOMPLETE 

import React, { useState }  from "react";
import './App.css';
// import Footer from "./components/Footer";
// import Header from "./components/Header";  /* Includes Component: Navigation */
import Page from "./components/Page";      /* Includes Components: About, Portfolio, Contact, & Resume */


function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  // FIX
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header 
        // TODO: input stuff here
        setCurrentPage={setCurrentPage}
        
      />
      <main>
        <Page currentPage={currentPage} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
