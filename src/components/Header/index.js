// THIS WILL INCLUDE (IMPORT) THE NAVIGATION COMPONENT
import React from "react";
import Navigation from "../Navigation";

// HEADER COMPONENT
function Header(props) {
  const { pages, setCurrentPage, currentPage } = props;

  return (
    <header>
      <h1>
        <a href="index.html">
          AG
        </a>
      </h1>
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </header>
  );
}

export default Header;
